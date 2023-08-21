class Campaign < ApplicationRecord
    has_many :characters
    has_many :messages
    has_many :users, through: :characters

    validates :title, :image_url, :description, presence: true
end
