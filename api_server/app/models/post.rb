class Post < ApplicationRecord
  belongs_to :room
  belongs_to :user
  validates :description, presence: true, if: :category_note?
  # validates :content, presence: true, unless: :category_note?
  validate :image_size_validation
  mount_uploader :content, ImageUploader

  def category_note?
    self.category == "note"
  end

  private
  def image_size_validation
    errors[:content] << "should be less than 500MB" if content.size > 500.megabytes
  end


end
