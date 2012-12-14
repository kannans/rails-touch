class User < ActiveRecord::Base

  attr_accessible :name, :update_count

  def as_json(options={})
    super :except => [:updated_at, :created_at]
  end

end
