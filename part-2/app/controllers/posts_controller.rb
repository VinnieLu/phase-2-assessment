get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.create(params[:post])
  if request.xhr?
    elements = {post: (erb :"/posts/_post", layout: false, locals: { post: @post }), form: (erb :"/posts/_form", layout: false, locals: { post: @post})}
    JSON.generate(elements)
  else
    if @post.save
      redirect "posts/#{@post.id}"
    else
      erb :"posts/new"
    end
  end
end

get "/posts/new" do
  @post = Post.new
  erb :'posts/new'
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end

put "/posts/:id/like" do
  @post = Post.find(params[:id])
  @post.increment!(:likes_count)
  likes = @post.likes_count
  if request.xhr?
    erb :"/posts/_likeCount", layout: false, locals: { post: @post}
  else
    redirect "/posts"
  end
end
