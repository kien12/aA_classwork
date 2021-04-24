require 'action_view'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper
    
    COLORS = %w(black white orange brown grey).freeze
    
    validates :birth_date, presence: true 
    validates :color, presence: true
    validates :color, inclusion: COLORS
    validates :name, presence: true
    validates :sex, presence: true
    validates :sex, inclusion: %w(M F)
    validates :description, presence: true
    
    def age
        time_ago_in_words(birth_date)
    end

    

end