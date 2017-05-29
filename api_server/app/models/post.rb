class Post < ApplicationRecord
  belongs_to :room
  belongs_to :user
  # validates :content, presence: true, if: :category_note?
  validates :room_id, presence: true
  validates :user_id, presence: true
  # validates :content, presence: true, unless: :category_note?
  validate :image_size_validation
  mount_uploader :image_file, ImageUploader

  def category_note?
    self.category == "note"
  end

  private
  def image_size_validation
    errors[:image_file] << "should be less than 500MB" if image_file.size > 500.megabytes
  end

end
