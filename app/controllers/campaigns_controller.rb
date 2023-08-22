class CampaignsController < ApplicationController

    def index
        campaigns = Campaign.all
        render json: campaigns
    end

    def show
        campaign = find_campaign
        playable_character = find_playable_character(campaign)
        if playable_character.length < 1
            render json: campaign
        else
            render json: playable_character.first
        end
        
    end

    def create
        campaign = Campaign.create!(campaign_params)
        render json: campaign, status: :created
    end

    def destroy
        campaign = find_campaign
        campaign.destroy
        head :no_content
    end

    private

    def find_campaign
        Campaign.find_by(id: params[:id])
    end

    def find_playable_character(campaign)
        campaign.characters.where(user_id: @current_user.id)
    end
    
    def campaign_params
        params.permit(:title, :image_url, :description)
    end
end
