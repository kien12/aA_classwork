class User < ApplicationRecord
    validates :email, :username, presence: true
end