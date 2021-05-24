class StaticPagesController < ApplicationController
    def root 
        render template: "/layouts/static_pages/root"
    end
end