class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body

  has_one :character
  has_one :campaign
end
