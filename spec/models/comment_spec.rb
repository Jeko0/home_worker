require 'rails_helper'

RSpec.describe Comment, type: :model do
  subject(:comment) do
    Comment.create(
      body: 'This is the first comment'
    )
  end

  describe 'comment' do
    it { should belong_to(:user) }
    it { should belong_to(:review) }

    it { should validate_presence_of(:body) }

    it { should validate_length_of(:body).is_at_least(5) }
    it { should validate_length_of(:body).is_at_most(50) }

    it { should_not validate_length_of(:body).is_at_least(1) }
    it { should_not validate_length_of(:body).is_at_least(55) }

  end
end
