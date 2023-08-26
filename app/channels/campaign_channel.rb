class CampaignChannel < ApplicationCable::Channel
  def subscribed
    stream_from "campaign_#{params[:campaign_id]}"      
  end


  def unsubscribed
    stop_all_streams
  end


  def receive(data)
    # message = Message.create(data)
    # serialized_message = message.serialize
    # ActionCable.server.broadcast("campaign_#{message.campaign.id}", serialized_message)
    ActionCable.server.broadcast("campaign_#{params[:campaign_id]}", data)
  end
end
