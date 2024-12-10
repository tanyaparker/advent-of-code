garbage = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
matches = garbage.scan(/mul\(\d{1,3}\,\d{1,3}\)/)
sum = 0

matches.each do |match|
  numbers = match.scan(/\d{1,3}/)
  product = numbers[0].to_i * numbers[1].to_i
  sum = sum + product
end

p sum
