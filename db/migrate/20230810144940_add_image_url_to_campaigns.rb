class AddImageUrlToCampaigns < ActiveRecord::Migration[7.0]
  def change
    add_column :campaigns, :image_url, :string
  end
end
