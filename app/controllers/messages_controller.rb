class MessagesController < ApplicationController
    skip_before_action only: [:create]

    def index
        messages = Message.all
        render json: messages
    end

    def create
        message = Message.create(message_params)

        render json: message
    end

    private

    def message_params
        params.permit(:body, :campaign_id, :character_id)
    end
    
end
