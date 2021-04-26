# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, presence:true, uniqueness:true
    validates :password_digest, presence:true
    validates :password, length: {minimum: 6, allow_nil:true}
    after_initialize :session_token, #??

    attr_reader :password

    def self.find_by_credentials)user_name, password)

    end

    def reset_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)

    end

end
