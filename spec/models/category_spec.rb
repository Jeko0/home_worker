require 'rails_helper'

RSpec.describe Category, type: :model do

  context "Associations" do
    it { should belong_to(:subject) } 
  end

  context "Validations" do
    it { should validate_presence_of(:name)} 
    it { should validate_length_of(:name)}
  end
end
