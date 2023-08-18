class CharactersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        characters = Character.all
        render json: characters
    end

    def create
        character = Character.create!(character_params)
        render json: character, status: :created
    end

    def destroy
        character = find_character
        character.destroy
        head :no_content
    end

    private

    def find_character
        Character.find_by(id: params[:id])
    end


    def character_params
        params.permit(:name, :race, :character_class, :user_id, :campaign_id)
    end

end
