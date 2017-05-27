class User < ApplicationRecord

  has_secure_password
  has_many :userrooms
  has_many :rooms, through: :userrooms
  has_many :posts
  has_many :invites

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates_length_of :password_digest, minimum: 6
  EMAIL_REGEX = /\A\S+@.+\.\S+\z/
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    format: { with: EMAIL_REGEX }
  mount_uploader :avatar, AvatarUploader

  def self.authenticate_with_credentials(email, password)
    user = User.where("lower(email) = ?", email.downcase.strip).first
    user && user.authenticate(password)
  end

  private
  def image_size_validation
    errors[:content] << "should be less than 500MB" if content.size > 500.megabytes
  end

end
