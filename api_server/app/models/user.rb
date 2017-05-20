class User < ApplicationRecord

  has_secure_password 
  has_many :userrooms
  has_many :rooms, through: :userrooms
  has_many :posts
  
  validates :first_name, presence: true
  # validates :last_name, presence: true
  # validates_length_of :password, minimum: 6
  # EMAIL_REGEX = /\A\S+@.+\.\S+\z/
  # USERNAME_REGEX = /\A[a-zA-Z0-9_-]{3,30}\z/
  # validates :email, presence: true, uniqueness: { case_sensitive: false }, 
  #                   format: { with: EMAIL_REGEX }
  # validates :username, presence: true, uniqueness: { case_sensitive: false }, 
  #                      format: { with: USERNAME_REGEX }
  # mount_uploader :avatar, AvatarUploader

  def self.authenticate_with_credentials(email, password)
    user = User.where("lower(email) = ?", email.downcase.strip).first
    if user && user.authenticate(password)
      return user
    else 
      nil
    end
  end
  



end
