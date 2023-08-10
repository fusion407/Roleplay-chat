class CampaignsController < ApplicationController
    def index
        campaigns = Campaign.all
        render json: campaigns
    end

    def create
        campaign = Campaign.create!(campaign_params)
        render json: campaign, status: :created
    end

    private

    def campaign_params
        params.permit(:title, :image_url, :description)
    end
end
