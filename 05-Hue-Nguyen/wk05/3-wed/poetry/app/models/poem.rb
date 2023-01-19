class Poem < ActiveRecord::Base
  belongs_to :poet, :optional => true
end
