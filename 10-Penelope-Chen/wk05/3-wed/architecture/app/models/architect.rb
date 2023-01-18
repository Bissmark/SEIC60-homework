class Architect < ActiveRecord::Base 
    belongs_to :architect, :optional => true
end