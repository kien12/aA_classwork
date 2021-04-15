require 'singleton' 
require 'sqlite3' 

class QDB < SQLite3::Database 
  include Singleton 

  def initialize
    super('./questions.db') 
    self.results_as_hash = true 
    self.type_translation = true 
  end
end

class User
  attr_accessor :id, :fname, :lname 

  def self.all 
    results = QDB.instance.execute("SELECT * FROM users")
    results.empty? ? nil : results.map { |user| User.new(user) }
  end

  def self.find_by_name(fname, lname) 
    user = QDB.instance.execute(<<-SQL, fname, lname) 
    SELECT 
      * 
    FROM 
      users 
    WHERE
      (users.fname = ? AND users.lname = ?)
    SQL

    user.empty? ? nil : User.new(user) 
  end

  def authored_replies 
    Reply.find_by_user_id(self.id) 
  end


  def self.find_by_id(id) 
    raise "not in db" unless @id 
    result = QDB.instance.execute(<<-SQL, @id)
    SELECT
      *
    FROM
      users
    WHERE
      user.id = ?
    LIMIT
      1
    SQL

    result.nil? ? nil : User.new(result)
  end


  def initialize(options) 
    @id, @fname, @lname = 
      options.values_at('id', 'fname', 'lname')
      # @id = options['id'],
      # @fname = options['fname']
  end

  def authored_questions 
    Questions.find_by_author_id(self.id) 
  end

  def add 
    self.id ? create : update
  end

  def create 
    QDB.instance.execute(<<-SQL, self.fname, self.lname) 
    INSERT INTO 
      users(fname, lname)  
    VALUES
      (?, ?) 
    SQL
    self.id = QDB.instance.last_insert_row_id
  end

  def update
    QDB.instance.execute(<<-SQL, self.fname, self.lname, self.id) 
    UPDATE 
      users 
    SET 
      fname = ?, lname = ? 
    WHERE 
      user.id = ? 
    SQL
  end

  def followed_questions 
    QuestionFollow.followed_questions_for_user_id(self.id) 
  end


end

class Question
  attr_accessor :id, :title, :body, :author_id

  def self.find_by_author_id(author_id) 
    questions = QDB.instance.execute(<<-SQL, author_id) 
    SELECT 
      * 
    FROM 
      questions 
    WHERE 
      questions.author_id = ? 
    SQL

    questions.empty? ? nil : questions.map { |question| Question.new(question) }
  end

  def self.find_by_id(id)
    raise "not in database" unless @id

    question = QDB.instance.execute(<<-SQL, id)
    SELECT
      *
    FROM
      questions
    WHERE
      question.id = ?
    LIMIT
      1
    SQL

    question.empty? ? nil : Question.new(question)
  end


  def self.all
    questions = QDB.instance.execute("SELECT * FROM questions")
    questions.map { |question| Question.new(question)}
  end

  def initialize(options)
    @id, @title, @body, @author_id = options.values_at('id', 'title', 'body', 'author_id')
  end

  def replies
    Reply.find_by_question_id(self.question_id)
  end

  def author 
    User.find_by_id(self.author_id) 
  end

  def followers 
    QuestionFollows.followers_for_question_id(question_id)
  end
end

class Reply 
  attr_accessor :id, :question_id, :parent_id, :body, :author_id

  def self.find_by_id(id)
    raise "not in database" unless id

    results = QDB.instance.execute(<<-SQL, id)
    SELECT
      *
    FROM
      replies
    WHERE
      replies.id = ?

    SQL

    results.map { |reply| Reply.new(reply)}
  end

  def self.all
    replies = Reply.instance.execute("SELECT * FROM replies")
    replies.map { |reply| Reply.new(reply) }
  end

  def self.find_by_question_id(id)
    results = QDB.instance.execute(<<-SQL, id)
    SELECT
      *
    FROM
      replies
    WHERE
      replies.question_id = ?
    SQL
    results.empty? ? nil : results.map { |reply| Reply.new(reply) }
  end

  def initialize(options)
    @id, @question_id, @parent_id, @body, @author_id= options.values_at("id", "question_id", "parent_id", "body", "author_id")  
  end

  def author
    User.find_by_user_id(self.author_id)
  end

  def question
    Question.find_by_id(self.question_id)
  end
##################
  def parent_reply
    Reply.find_by_id(self.parent_id)
  end

  def child_replies
    
    Reply.find_by_id(self.parent_id)
  end
#!!!!!!!!!!!!!!!!!!@@@@@@@@@@@@@

end

class QuestionLike
  attr_accessor :id, :users_id, :question_id

  def self.find_by_id(id)
    raise "not in database" unless id

    results = QDB.instance.execute(<<-SQL, id)
    SELECT
      *
    FROM
      question_likes
    WHERE
      question_likes.id = ?
    SQL

    results.empty? ? nil : results.map { |questionliked| QuestionLike.new(questionliked)}
  end

  def initialize(options)
    @id, @users_id, @question_id = options.values_at('id', 'user_id', 'question_id')
  end
end


class QuestionFollow
  attr_accessor :question_id, :user_id

  def self.followers_for_question_id(question_id)
    users = QDB.instance.exectue(<<-SQL, question_id)
    SELECT 
      users.* 
    FROM
      users
    JOIN questions ON users.id = questions.user_id 
    WHERE 
      questions.question_id = question_id 
    SQL
    users.map { |user| User.new(user) }
  end

  def self.followed_questions_for_user_id(user_id) 
    questions = QDB.instance.execute(<<-SQL, user_id) 
    SELECT 
      questions.*
    FROM 
      questions
    JOIN users ON questions.user_id = users.id 
    WHERE 
      questions.user_id = user_id 
    SQL

    questions.map { |question| Question.new(question) }
  end
  
  def initialize(options)
    @question_id, @user_id = options.values_at('question_id', 'user_id')
  end

end