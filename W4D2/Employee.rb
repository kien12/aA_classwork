class Employee
    attr_reader :salary, :name, :title
    attr_accessor :boss

    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        # p darren = Manager.new('Darren', 'TA Manager', 78000, 'Ned')
        # p darren.hire(self) unless boss == nil
        # p super(name, title, salary, boss)
    end

    def bonus(multiplier)
        bonus = @salary * multiplier
    end

    def boss=(boss)
        @boss = boss
        boss.hire(self) unless boss.nil?
        boss
    end

end

class Manager < Employee
    attr_reader :employees

    def initialize(name, title, salary, boss = nil)
        super
        @employees = []
    end

    def hire(employee)
        employees << employee   
        employee
    end
    
    def bonus(multiplier)
        bonus = subsalary * multiplier
    end
    
    def subsalary
        total_salary = 0
        self.employees.each do |employee|
            if employee.is_a?(Manager)
                total_salary += employee.salary + employee.subsalary
            else
                total_salary += employee.salary
            end
        end
        total_salary
    end
end


ned = Manager.new('Ned', 'Founder', 1000000)
darren = Manager.new('Darren', 'TA Manager', 78000, 'Ned')
shawna = Employee.new('Shawna', 'TA', 12000, 'Darren')
david = Employee.new('David', 'TA', 10000, 'Darren')
darren.hire(david)
darren.hire(shawna)
ned.hire(darren)
# p ned.employees
p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000