require 'net/http'
require 'open-uri'
require 'json'

class PokemonGrabber

  # objects stopped getting made at 721

  $url = "http://pokeapi.co/api/v2/pokemon/"
  $type_lookup_obj = {}
  $pokemon_count = 1


  def run
    p "Grabbing the info and images..."
    get_pokemon_info
    p "Info get!"

    p "Writing the lookup file..."
    p $type_lookup_obj
    write_lookup_to_file
    p "All done!"
  end

  def get_pokemon_info
    until $pokemon_count > 721 do
      uri = URI($url + $pokemon_count.to_s + '/')
      response = Net::HTTP.get_response(uri)
      pokemon = JSON.parse(response.body)

      p pokemon['id']

      $type_lookup_obj[pokemon['name']] = {
        'type' => pokemon['types'][0]['type']['name']
      }

      $pokemon_count += 1
    end
  end

  def download_pokemon_image(name, sprites)
    path = './dist/assets/pokemon/' + name + '.png'
    File.open(path, 'wb') do |fo|
      fo.write open(sprites['front_default']).read
    end
  end

  def write_lookup_to_file
    File.open("typeLookup", "w+") do |f|
      f.puts($type_lookup_obj)
    end
  end

end

P1 = PokemonGrabber.new
P1.run
