class User < ApplicationRecord
    has_many :characters
    has_many :messages
    has_many :campaigns, through: :characters

    has_secure_password

end
