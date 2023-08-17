class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :character_class, :user_id, :campaign_id
end
