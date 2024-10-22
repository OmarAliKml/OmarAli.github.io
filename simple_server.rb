require 'webrick'

class SimpleServer
  def initialize(port = 8000)
    @server = WEBrick::HTTPServer.new(
    DocumentRoot: '',
    Port: port,
    DirectoryIndex: ['index.html']
)
    setup_routes
  end

  def setup_routes

    @server.mount_proc('/redirect') do |req, res|
      begin
          res.content_type = 'application/json'
          res.body = JSON.generate({ redirect_url: 'index.html' })
      rescue StandardError => e
          handle_error(res, e, "Error in redirect handler")
      end
  end
  end

  def start
    trap('INT') { @server.shutdown }
    puts "Starting server on http://localhost:#{@server.config[:Port]}"
    @server.start
  end
end

# Start the server
if __FILE__ == $0
  server = SimpleServer.new
  server.start
end