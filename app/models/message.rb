class Message < ApplicationRecord
    belongs_to :campaign
    belongs_to :character

    def serialize
        serialized_message = ActiveModelSerializers::Adapter::Json.new(MessageSerializer.new(self)).serializable_hash
        serialized_message[:body, :campaign_id, :character_id]
    end
end
