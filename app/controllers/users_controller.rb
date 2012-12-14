class UsersController < ApplicationController
  
  # GET /users.json
  def index
    @users = User.all
  
    respond_to do |format|
      format.json { render :json => { :success => true, :users => @users } }
    end
  end

  # GET /users/id.json
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.json { render :json => { :success => true, :users => @user } }
    end
  end

  # POST /users.json
  def create
    @user = User.new(params[:user])

    respond_to do |format|
      if @user.save
        format.json { render :json => { :success => true, :users => @user }, :status => :created, :location => @user }
      else
        format.json { render :json => { :success => false, :errors => @user.errors }, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /users/id.json
  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.json { render :json => { :success => true } }
      else
        format.json { render :json => { :success => false, :errors => @user.errors }, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /users/id.json
  def destroy
    @user = User.find(params[:id])
    

    respond_to do |format|
      if @user.destroy
        format.json { render :json => { :success => true } }
      else
        format.json { render :json => { :success => false } }  
      end      
    end
  end
  
end
