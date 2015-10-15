require 'rails_helper'

RSpec.describe "user can edit ideas" do
  before do
    Idea.create(title:"new", body:"new")
  end

  scenario "user edits idea" do
    visit "/"
    click_on "Edit"

    find('input[type="text"][name*="idea[title]"]').set("better idea")
    find('input[type="text"][name*="idea[body]"]').set("better body")
    click_button "Update Idea"

    within(".idea") do
      expect(page).to have_content("better idea")
      expect(page).to have_content("better body")
    end
  end

end
