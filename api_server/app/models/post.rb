class Post < ApplicationRecord
  belongs_to :room
  belongs_to :user
  validates :description, presence: true, if: :category_note?
  validates :content, presence: true, unless: :category_note?


  def category_note?
    self.category == "note"
  end
  
end
