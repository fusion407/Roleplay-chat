class CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters
    end

    def create
        character = Character.create!(character_params.merge(user_id: @current_user.id))
        render json: character, status: :created
    end

    def update
        character = find_character
        character.update(character_params)
        render json: character
    end

    def destroy
        character = find_character
        character.destroy
        head :no_content
    end

    def displayUsersCharacters
        characters = Character.all.where(user_id: @current_user.id)
        render json: characters
    end

    private

    def find_character
        Character.find_by(id: params[:id])
    end


    def character_params
        params.permit(:name, :race, :character_class, :campaign_id)
    end

end
