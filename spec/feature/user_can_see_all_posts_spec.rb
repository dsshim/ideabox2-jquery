require 'rails_helper'

RSpec.describe "user can see all ideas" do
  before do
    Idea.create(title:"new", body:"new")
  end

  scenario "user sees ideas" do
    visit "/"

    within(".idea") do
      expect(page).to have_content("new")
    end
  end
end
