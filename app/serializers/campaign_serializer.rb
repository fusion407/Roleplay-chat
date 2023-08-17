class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description

  has_many :characters
end
