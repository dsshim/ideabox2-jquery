class IdeasController < ApplicationController
  respond_to :html, :json, :xml
  before_action :get_idea, only: [:edit, :update, :change_quality, :destroy]

  def index
    @idea  = Idea.new
    @ideas = Idea.order(created_at: :desc)
  end

  def create
    idea = Idea.create(idea_params)
    render partial: "idea", locals: {idea: idea}
  end

  def edit
  end

  def update
    @idea.update_attributes(idea_params)
    redirect_to root_path
  end

  def change_quality
    @idea.update_attributes(quality: params[:quality].to_i)
    head :ok
  end

  def destroy
    @idea.destroy
    head :ok
  end

  private

  def get_idea
    @idea = Idea.find(params[:id])
  end

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
