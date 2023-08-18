class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :character_class, :user_id, :campaign_id

  has_one :user
  has_one :campaign
end
