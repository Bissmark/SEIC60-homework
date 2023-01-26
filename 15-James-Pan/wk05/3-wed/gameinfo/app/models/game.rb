class Game < ActiveRecord::Base
    belongs_to :artists, :optional => true
end