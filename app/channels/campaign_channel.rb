class CampaignChannel < ApplicationCable::Channel
  def subscribed
    stream_from "campaign_#{params[:campaign_id]}"      
  end


  def unsubscribed
    stop_all_streams
  end


  def receive(data)
    # puts data
    ActionCable.server.broadcast("campaign_#{params[:campaign_id]}", data)
  end
end
