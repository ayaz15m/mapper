class MapController < ApplicationController
  def index
  end

  def search
    @search = params[:body].strip

    results = Geocoder.search @search
    if results.first.geometry["location"]["lat"].to_f
      @lat = results.first.geometry["location"]["lat"].to_f
      @lng = results.first.geometry["location"]["lng"].to_f
      render :index
    else
      redirect_to root_path
    end
  end


end
