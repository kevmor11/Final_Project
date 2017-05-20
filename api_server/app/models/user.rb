class User < ApplicationRecord
  has_many :userrooms
  has_many :rooms, through: :userrooms
end
