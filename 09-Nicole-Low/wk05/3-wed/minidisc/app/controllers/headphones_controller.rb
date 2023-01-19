class HeadphonesController < ApplicationController
  def index
    @headphones = Headphone.all
  end

  def new
    @headphone = Headphone.new
  end

  def create
    headphone = Headphone.create headphone_params
    redirect_to headphone
  end

  def show
    @headphone = Headphone.find params[:id]
  end

  def edit
    @headphone = Headphone.find params[:id]
  end

  def update
    headphone = Headphone.find params[:id]
    headphone.update headphone_params
    redirect_to headphone
  end

  def destroy
    headphone = Headphone.find params[:id]
    headphone.destroy
    redirect_to headphones_path
  end

  private
  def headphone_params
    params.require(:headphone).permit(:name, :price, :weight, :frequency, :impedance, :image, :brand_id)
  end
end
