require 'rails_helper'

RSpec.describe "user can delete idea" do
  before do
    Idea.create(title:"test idea", body:"test idea")
  end

  scenario "user can delete idea", js: :true do
    visit "/"
    click_button "Delete"

    expect(page).to_not have_content("test idea")
  end
end
