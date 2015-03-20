class Conversation < ActiveRecord::Base
  # A conversation will belong to both a sender and
  # a recipient all of which are instances of a user.

  belongs_to :sender, :foreign_key => :sender_id, class_name: 'User'
  belongs_to :recipient, :foreign_key => :recipient_id, class_name: 'User'

  # the ids are in the migration file
  # i guess just have to specify the class

  has_many :messages, dependent: :destroy

  # this ensures that the sender_id and the recipient_id
  # are always unique so that we only have
  # unique conversations in our application.
  validates_uniqueness_of :sender_id, :scope => :recipient_id

  # will help us retrieve all conversations of
  # the currently logged-in user
  scope :involving, -> (user) do
    where("conversations.sender_id =? OR conversations.recipient_id =?",user.id,user.id)
  end

  # will help us check if a conversation exists between
  # any given two users before we create the conversation.
  scope :between, -> (sender_id,recipient_id) do
    where("(conversations.sender_id = ? AND conversations.recipient_id =?) OR (conversations.sender_id = ? AND conversations.recipient_id =?)", sender_id,recipient_id, recipient_id, sender_id)
  end
end
