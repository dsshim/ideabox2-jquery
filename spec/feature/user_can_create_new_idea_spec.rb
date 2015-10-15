require 'rails_helper'

RSpec.describe "user can create ideas" do

  scenario "user creates ideas" do
    visit "/"
    find('input[type="text"][name*="idea[title]"]').set("better idea")
    find('input[type="text"][name*="idea[body]"]').set("better body")
    click_button "Create Idea"

    within(".idea") do
      expect(page).to have_content("better idea")
      expect(page).to have_content("better body")
    end
  end
end
