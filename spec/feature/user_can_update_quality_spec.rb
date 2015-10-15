require 'rails_helper'

RSpec.describe "user can change idea quality" do
  before do
    Idea.create(title:"new", body:"new")
  end

  scenario "user can increase quality", js: :true do
    visit "/"
    click_on "Thumbs Up"

    within(".idea") do
      expect(page).to have_content("Plausible")
    end

    visit "/"

    2.times do
      click_on "Thumbs Up"
    end

    within(".idea") do
      expect(page).to have_content("Genius")
    end
  end

  scenario "user can decrease quality", js: :true do
    visit "/"

    2.times do
      click_on "Thumbs Up"
    end

    click_on "Thumbs Down"

    within(".idea") do
      expect(page).to have_content("Plausible")
    end

    visit "/"

    2.times do
      click_on "Thumbs Up"
    end

    2.times do
      click_on "Thumbs Down"
    end

    within(".idea") do
      expect(page).to have_content("Swill")
    end
  end


end
