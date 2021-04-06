class Employee

    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        bonus = @salary * multiplier
    end

end

class Manager < Employee
    attr_reader :employees

    def initialize(name, title, salary, boss = nil)
        super
        @employees = []
    end

    def hire(employee)
        
    end
#employee.boss.instance_of? Manager 
# manager.employee << employee
    def bonus(multiplier)
        total_salary = 0
        employees.each  do |employee|
            total_salary += employee.salary
        end
        bonus = total_salary * multiplier
    end


end


ned = Manager.new('Ned', 'Founder', 1000000)
darren = Manager.new('Darren', 'TA Manager', 78000, 'Ned')
shawna = Employee.new('Shawna', 'TA', 12000, 'Darren')
david = Employee.new('David', 'TA', 10000, 'Darren')

p ned.bonus(5)
