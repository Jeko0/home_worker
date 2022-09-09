require 'rails_helper'

RSpec.describe Subject, type: :model do
  context "associations" do
    it { should have_many(:categories) } 
  end
  
  context "validations" do
   it { should validate_presence_of(:title) }
   it { should validate_uniqueness_of(:title) }
  end
end
