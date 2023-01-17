class ApplicationRecord < ActiveRecord::Base
  skip_before_action :verify_authenticity_token 
  self.abstract_class = true
end
