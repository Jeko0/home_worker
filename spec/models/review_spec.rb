require 'rails_helper'

RSpec.describe Review, type: :model do
  subject(:review) do
    Review.create(
      title: 'first review',
      body: 'this body is for the first review'
    )
  end

  describe 'review' do
    it { should belong_to(:user)}

    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:body) }

    it { should validate_length_of(:title).is_at_least(5) }
    it { should validate_length_of(:title).is_at_most(30) }

    it { should_not validate_length_of(:title).is_at_least(4) }
    it { should_not validate_length_of(:title).is_at_most(51) }

    it { should validate_length_of(:body).is_at_least(5) }

    it { should_not validate_length_of(:body).is_at_least(4) }
  end
end
