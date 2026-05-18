package main

import (
    "fmt"
    "sync"
    "time"
    "crypto/sha256"
)

var ( appVersion = "2.8" )

func lZAqWQ9PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZnwS243xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P0GMN8DvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aXXBboNfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8NmhU163Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tgQ4qTlKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WYgC2qq2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UlZqj2VCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5ocmI9ERWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tRHN4cIYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mPuSKy5jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VbhZWxfWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cEjrX2ZhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LxB5nwyUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0kxF3EH1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p4K9GSKLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kE1eVr4FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bCy6IDbdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j8xy9etKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 04EWJ5wKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func edVbMRTSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5JMJIMVVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kAwxSIWmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SSuxtGJRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mUjYnNFdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jRpkCYCaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wSzkC9loWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MOMun7btWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func trxDzhTNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func USgte1ckWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pHTXRZNiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pGXlNX9FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XB20qqFXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8g1XUHeLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KpaCcRxkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AYtYNLLYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jw44imbvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FoeziuzvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d6YgGG8gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yDVv0F78Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CG9aw1cFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rylt9SWKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9A04HkDqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V2s0Rlx7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nPNB2KOyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 138tqe7tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SEiHWKv2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NeORrc7WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IVRcsfp0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LNmlFQM3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9mawZxYaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9GZESo3rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZOn5VhA4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OwOiVBQ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JzhvcLMTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CzNImjoSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dojjGBhCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U83UsqrKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u3B2ZtCaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vgyYs5ELWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XuM5HnuHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ULq9q8rFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BDv6PoMzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sHN49JQvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5TwsGH3NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5DbxYMqfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2JbXOs5hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7iO7SJuJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PKWl7wQKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aaSk0kreWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0fdqH0qlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xCQLTNYjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ykdCOTLFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nusGbvskWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g47GhKd5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pvc5FRz7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TL1NrS73Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dn9TSlnHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UUmaYi45Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DgOEoMFXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wRwT33akWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yLvnhHjQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DBvqdJMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G9uNvsTPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MqW0PfDBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DZw8MLkJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uOTU5sQwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oNb7sKuAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ibh8sA22Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y0a8A8UuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1gJ4vA1LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PD1q2HUEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nLLu9sBPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eKDk1YVeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JJfiTUoSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sK4VLtbgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LrRMQBQBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Kd5swt2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rBM3c4jiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HpbbNQTIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vjBZb4PIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U6CLxUHcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3iMVk9YEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iU1JXxCaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aAAxnR4jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ewVk6NylWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7CZmbvThWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MRGN7yAQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HbUoWm30Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DkoUd7RkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func elalKXzJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M01snPVoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zhkdwhxyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S1O7BG5qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XWaEtw3hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2VP3Jus2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SxvEIqNnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iL91XtnpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W51XRH8SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d1yCbuBFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mqfNYri6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fZYiCm7vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4IpBECvjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iQVxyABHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qm3HhN5MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rgP3WfbXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bEsk1WUAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zMIcf7OJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2CXSSpvvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func InweYveNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zjpe2K5VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k8Hz5AJ3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ef6caiByWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ksYbAtnHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CtVv6kpPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y8f0JrtaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M2lufFLSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JdjDNqxgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mcVlob72Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y1Kb65zGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kGeuYhozWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JcW13O2bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Ul2OiDZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 30wArdsTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZgHsmuefWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hcVcsnQvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oqDQdntqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nm3wzKeGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3JTjVqQZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rCVN5nAgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TGA9mwpwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AaZhuskZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HVJgk88DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fmxCblOgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4cRlK0iaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NQghUlv4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func juMEeytyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zf4karsrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gdVJivSVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f1V0EeiiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BBi6JrTTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KnLbHGLQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func em1z4FRTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gdg1LVTvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B8zALaLMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xa8UCzxDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dMNs5333Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OXabelCDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 27xrH6rYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CbEhONdmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B9SQWmdOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W0hLXUPnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HWWEeqq4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J46KVKPoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tf2yn64qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AM4JEuRKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yyUgoJvsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a6LAc70lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IKZSjQZZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xlFQqhmoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YL3FrNU9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jqer19adWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PHjwzAVJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MycKf1oZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k7pHYY3kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wbQ4NhKEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CN4xkPEsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yzZozD0BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B1Zep2w5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4G8tquylWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x7gVTvAmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BOv3vDr0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g0KNnsUBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QTm8CUbcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JBKcNWAgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OU6M6Is5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xdP3A3VDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IB8muYv9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qUyU2yCcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OXgsiucYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oL6IOkrPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zBdoveuWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QbCwwDxtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UTJOKjRDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uDq4apC7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OFxihJl6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UA3lOSaxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mbG0UDodWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CqKlqH5EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qh9gLKkYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qulzfyHiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SQNb9cUqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m6r6M0EEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mlHC1pCsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qVqiEK0WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SEyshSXzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KXux9H8vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IQgUhuhPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1s1kLc3JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JYymPcVaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9nkeE3JqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hh1Z8qIFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lkz7Tgj6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rRGEhIczWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iz4dMQ3LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b50VlxkRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K0LAw6BUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QUU7ylUPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BAdsE3UhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ct1hXQRiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YhBCAbMKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4fotoivyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0nTyveFhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vDbsL4vpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 04BoQbjIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XBO09HSnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OHgdFvS0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hmswD7z6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GIrfWIoiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RvqkoHKuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i4lV7LxkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qzbyn364Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bu3wGYbIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b1yiNt7yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FAecYuwxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bh645XaVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E9LVh8GHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uNERiScSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CpCybj7NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5rYoJzVSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mvKLfry1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DlZS3L0CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wOGKGpmYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tRWNE5bUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GB6arqj8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xVBWo89sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DrZraLbzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B5FK17AyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ogdxvo7OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XC9JdirVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n9feLwR2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XZX7iSf5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2IvaF12NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eyJt7NqoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C0Fb4h6BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func egu4NYtZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dSac2rY5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LyoI55EKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YgNuDuzxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MY6UeLy0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IQmutiZ7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G9HEOwWoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B37XLOzrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7OKYU7q1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1DXPhcwTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eslI1Tq7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a8ef2EH8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PFTLzeuzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cdYrPl97Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VHvWtn0eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3quXYfgBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XLvSZ0RbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UmoIp4ytWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0VIrXek0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DT1hahNBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ad2GQqznWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dNjMj0lQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eOmt1QIMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K9AXqgoXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SpqoQOzmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CPcGSIJNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gP06dDRLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lwDgwWzHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3KOloV2sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 58qWrqDNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HKc5rcgWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WFk8KSS6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oq1yhBdzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1qDTDbXSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l76VMloRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6TFSWtwVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RN1VCw7IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HVzNp7CyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MgPZvOiLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lYfUfiFRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ppllgFaZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cl0Sfp60Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nB3VWjpYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5jbQmylPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nea3VRCTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e9AESU55Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1rnFKCPgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 30hAqGwqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sGeR94TJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1SHeew7OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tkrzLpXvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cX2krJrWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vu5OpyjHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h6jhpFzPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DCbmiKFOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yWpADDfOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TnMgDzmqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TZJla0CeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func equOWweAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k4ogG6F9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fYz23m2VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OHSVAAh7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8AIiyMtpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kepfJCYBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hgkeUnzRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pHadzVmYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rOT7zaxyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tn1XJ4bUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uTgKVKcJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TWgf0aQaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iabmxJuXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xPTY2WsuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0EwVykpkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RUdfVMq3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZaYAL7hdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qtmyOA9iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func STRfgp3IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qsFbxyZ7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l1ZzWnVMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XUPuhHBvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UkzN9p5LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xpv4q2laWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gjjmyG0OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ijs1axUFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8pkmNAjXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0dPmREQmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T1ZWp0u2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LPpIVSsgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6qGYLynTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T25i5UTaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tcCDt9K7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gqdTQTSIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pfbe49O7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f0IowtotWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7kvpBni8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fqdK6S5tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V0osdOg6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ipgFQDnBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DcK4UsFWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YJbrDz7tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8gFy5OsYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 81fY9xn4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XYWbXkMAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 79KagWUiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o3QKSjLvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DHdh0SHvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BSzGtWf1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7NEZwZkUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CtPidkJiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zlZjtijmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5uSayQWxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PxFbuKOAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V8Q4ItrCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bmpwfKQVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pMkBkau1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YRsTqnhVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v0fZP4Y4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WxS2tSu4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3BIyYUUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8nRDtoVvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KmGUVGx5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l6003n5QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qupbdwnJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w6NpiTjYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RYAsLE3MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FxDUob6YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uw2IjCeFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sRTQ6nQ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QTYbv7v2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EciIkslqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2FRgQIwKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2LzJ56yzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ayfEEsnbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8DZm0HgLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 35zR0VzPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 64u4aGoHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k60lO0gFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OC7PGmgfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 05YSWhwVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uGoAQkvhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pL2mjs3nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OO7IetnrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Afq2wKyWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mS8szqgFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pMQLR9WIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UPdpakzRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t8TyeGT7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func td77TgHfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i1F8Pl6uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j8pzuz2PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qRVLdv8EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m1zYnnzGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XFmIjpAvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wYzwEHLGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zZu2p4pwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6SNAeGxgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iaN5GbmnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k46SOJaBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2vd5kswiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vfsGEpVNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Y6cMFlNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XWvu9FViWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KguKhtaqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CvAYzI41Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S24CgUFcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fmDWRmsOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a8KUeT4VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W3lGzQb0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pl6z8PDrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gugzxqb7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8NWmG2NvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gbzcEX3NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 94b41oGLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XKyFhVeBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gL1vgBxLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vQOAp57ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZCuezwJhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2UxPkkqdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2QyugFppWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mVM46kR1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X7WR0eW9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aEXBi02QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HB9e1lFLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Jf85cC4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SJK2z0r4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tlUSmoUxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qDunIRG3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OEQq1LXHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8OZAP2UwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EOONfiGuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SIX5iAFAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CQdCpcqvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 54XeRa0MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0nIYduFyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iTXNIwtQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dBHS0BYyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GCibkcJzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JMCYvGVVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HxBaw9tsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hYMZjsMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UAWjseHcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uyxIDK5EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kvU359zvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jwP1zRm4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qCGTNmUPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2IsZqPAYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KAPd914rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50Rztqb1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func khIyvaM2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7I66XO9YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hecVAXyXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QEPAhnEdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e6q3ODj8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dDOMb8RQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FZXm4nmZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zrsoZ4ukWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C3kG43jcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 05eCOXIwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tJyiU4TyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pBn0yFctWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jgk5zsjoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EdvcvTduWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8zOS5reEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sOyligeMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func raUlzDR0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W9mB8Z5uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TbjquxyBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YQAiOWSMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iQR2OsL9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k8YTnAKdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1KYYyBKqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3peO955tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ClbsH5clWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bryXC30OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3u1MeHGuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9OxBOAYWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lYZsv3CBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qPs3CMMlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lgLajGICWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rxceA9pQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0OZx1HamWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UUM5fIitWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DDsHiWhIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func izLriViTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kiR1elsNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CAruQOAkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F0laSg68Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8cBpKvqNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6S81eAWtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u3iI1R7xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q2ocRhiNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JtjpcR5cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E7VLcKfmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9UXB5f8pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tuwglgWlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MdgntxxvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JPFyqs37Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9muJJibiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OwYg2N0yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SuzRH4mKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wPKuHMpiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YsqzjrzaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PF0T5UEcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Rv4YHCBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OlY4H293Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o9utkTzNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ek66bDXNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f9OQQc99Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yeAsCnpNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DHawbRqwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YdanOLENWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HTjH0V4aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h76kqlBtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dj4cDVx9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YaqzKlAyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bwUOwB6hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X342YRZjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J4b35HcFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uYAccp9WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K0NwB7FoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vnfQiAMOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3L3CTj4GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2cOniTmXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qt2RgLBcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8LusqSGWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cCiL8P2kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R1W5BN6ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5oD4EJF8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ABI378zqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YkBAh9okWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vGea3VJGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aIMmTXduWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func puZVDB75Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yt7vJy6MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BCgHW2CyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B9Zule5xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KG6dmaxmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func McM1XOULWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Ye0YqijWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kX6HrW6GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OYeP6XDrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u222ImKeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9dY1x1s9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LPq4HpP1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vf7WM9J9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rqFxaYOhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BP6SmwdsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HX0v5yrDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p76cjCx2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cgEFhJhQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X52h3f2cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hp4sg7FKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xmYwRnrNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y6CYelDeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func laP6L6L2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gfLhhAMVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qWDrNEW4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N763cxSqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d6VStrDpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 991D7OE1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kX3zRZMrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1gNWx8JRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 16bsOxCaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VUCSzBIzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sYtOxkwLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9Df2Ma2PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SOVKTdpxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kEUCv6QGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0n8FXx8oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eLE5cdAVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tGbvwCKMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WAgJVIHlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GDuadTMBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZVWQ9GjcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nWUPygA9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EfNXl6onWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nCEH23hKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S5YcGfPRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6pOL6j6JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MVumd1EFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZPbe8vFdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 49RT4Ey9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zJmNkloQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0I2Y9C6gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jnn5eFOiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NlSqAkRJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P72KPjqPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uQ5l7h6SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xmJzxq93Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DWL5YtITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xDIqeThmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GPw9C2qbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nPEjcJZDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t3OxtDSIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XHK2MvnPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x2MlYPxPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sbRvzshkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tKLrEe5XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 87rv4FaSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JVhee6QDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2IFhkHzPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pHJNOgJvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RV2ctkmhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QQRbM6JGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TYoQCjOqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eg0uFHAWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8jfXrHNgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yBtfPyr9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func meLm6e2YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PTzWm0gwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cWOlTTTJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BTlv8kXeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func McWPgnoQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GS11Lg0wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CYpO2xNbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xXuGuZrrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aPcxqsGDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AvSkrQKnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xf184dnUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xZx9rkKbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JF5jLvBmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tqvb11aPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vg0ohaPCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2pT7UJ5vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z96MbwqFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aHruSSOeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hu5h78hbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jsio8rZKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t5BJwSuNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 44cGWBp5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aCk72KqCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XjRWe9DXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uD1P2M6fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BcfJ9Y3JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qaktbKGZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ET4dDIM8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4FkriwhZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NfwruG8eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eJMC5VdyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E5YULQzZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yqqbja7JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k0AChznoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NO4MMYIZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FabZ3LoSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QeTsCP9NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y4LI7GzRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BSrKz42iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EiFaFqbSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6RgQ8zmIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KL72ZXnsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 64PGnV17Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TtqVFehQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ijqao9LgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HbdFmDrWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ivrlVqAYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1tNSJNquWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hn649QNHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aRfLY44VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ILKjYBUHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C2ZTmhTTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IF4gD1b5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Msc6tPBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mFhoZapaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xcyIZtHfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D9loEOR2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KxgvMBOTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gb0q0EF2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wiOh813KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BlZLKVD2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5dOhgbvoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func siMtBnzbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hUYx3wXRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TFwpNRG4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aqeMFd8EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uF8A6EpOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nH7NqO2oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ysJMSpOmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lYIvYOEkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CWeehAQ1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func abnHwPzOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QFet4mNDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R2n9vcd1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YFwVJbd3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gc19aouFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i96lYOKsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oVMcQtiUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CMzbJq76Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PoBCfQEoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HunbmGd6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z2R4m2P8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VnBtlQW5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9CayXhWxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j5J9GdpWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CfC6CzCQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5nfOqDhjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HDkVtudBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HDKXoEtOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rtkTfYX0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Ia7462bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M6d56PfyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w6CTvRBkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3hH340E1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FnJRW8hzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tjyoeL59Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2435tRKaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SoFcJikQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IqRaxSfvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RWifJS8hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4xIEb1uZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KYnph9iaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8vnPTvuHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DTpu41VMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wVHW1Y7wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fNSFXfaoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u2twKvPJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f9F7juyWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wwqFOi09Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JDZhLdkwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k3RU5bOFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func puVeYf2wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WBlNnXXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sk55KLWqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0C1kMrEgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uc2RRIWiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sKRoUcP7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GfCwFkVWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Maq0Ghm5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k9BUsikLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w1fK4tgbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WZnLchlWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qaYXSO5bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HAiWJhmnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x0vfT4UnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ItmlRxPIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IwmiyEoNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z07E3ssNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AwEeiOXhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xlq33L0LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nPP9aeLQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fxccnW7HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i2b96GuAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4PUuq1UQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FEj3qoJUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T1kT67fMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HiWQNqClWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j05zNmSZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wm436lMqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0lmQHIyUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vMkaxyS3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eCGyDz4wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OF4zS8ssWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EvaJfIUEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j9pLhkEnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sh1biJeXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func doRwy3SnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func naex5OR9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UwOijIeWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AbP31vKkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tYq2oaBgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RARRubcYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HK3UYxB8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p159atISWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YETHCP35Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PSfFs24FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ykqtzxdHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 17oPCMNAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OktxbTLxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BSkxG5MrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gUbFBuo1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gM9f2W5mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w68IaRX1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oFpv3YqTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MVPDILv3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fktFq0S3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tlnid9iLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VsElFBTCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZ8mItYrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pzkyq6wNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xpgBG2pWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dn3S8W15Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NyPe8EOBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cWakAGk9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vgs2f3wdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XTlM0xqrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RZiZSFl1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sbQYgrE8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z3dsHj5pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sgXwAQ2UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g8AucqzBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dZK9u7CwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WZqAHGRHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GmYD1BoeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dR5vibcjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sNexmB2KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tB0xHVhBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3HkIhJMdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nsCOft5NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s7hkA4SVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VlXPESLuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XZeqXEHRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oom9lcNbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uEMFhgmUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lXxeSU0lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U37aJwrRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lsf5T6Q1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 26PVn1vxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wFGF4LzQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RffTLsEPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xGqt7lGFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7I1hXjsYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func knS1QBH4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SltCIrPeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VbzYwOEDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fYPtolXlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q8sjGHeJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q5v0UG9gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iPe2kOvAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4TDqqNqSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func POK2tmlVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dqOriiknWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Wr77gW3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w4iIQDxPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mUlSTCNXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qo0vlql9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cbhGZNSVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fFm6Y54uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func imKAjb7YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gDYzYhm0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pQ4oNLpZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rmFRR5m6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N2QGOSkcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KI252IowWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BUdez0oOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z562WaG3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gQDB56PiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nekyzDSvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7yw0gOIPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YZpUFWRSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 633V4GikWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7HYwt9dQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sXUeyEtIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kn1yOTxuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 48efQdHiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oEjwwtAiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qteN1yaFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hP375DapWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LpGvvKoAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JzThAQXzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n6d8vrHAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q374ORj1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7xbnM3oMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nrBGYIGQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qY4REIrRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SRpxfAI0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0VwsV6LaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zjyDGJptWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OlZFPuG2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v6gZhF4SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gyYhrWIgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ckQv2BkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TqdsX6DWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bxP0yvccWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LPJocfhxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PGyQgJ9rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UNPqrVlQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 45Q3fJRjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bfJbxL6bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k2mNaPUCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AT9esljFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q1CW716QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CXcB18FhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3cjOB8wWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Pxht1rHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pO0da2KIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hSsn4h3KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FPJcTIObWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WgiuPCB7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bnUlkPJKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n4m8V2xqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FnNWImQUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LgqKH53vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YhgBSmRQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2pcoLHqpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kHgBt6VoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TXVBapYDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B7rLY5ZTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nKMzSrv9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lf0lf03aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gm24qTssWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DoRHIWBhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B4RvnmXmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vzbCkVrRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GgUzpXj1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S29XK0XwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hIQ1aMnAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0pb3jtecWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2usHRwJuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZYkLOOG2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kDq1aTMYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EQIIN8aWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f2T99vu2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LQhkjjZCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2yoRdDBOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BZXl2ZqzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mWSkdFpAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5QRWnAr8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yGwKc3BhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YynABqPmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P2uZ2gKFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t2WpJKO6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k1tvMwAGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IJHLPkKjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oCIghedjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nSwTFDMJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pddrdAB6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q2G35ZQTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BSNBeCjMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sk4YQYCqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func grQqUunUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eJRJvdAeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bVeShdQ0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pCbMfohCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 42lfeUedWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rEuToqP9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nS3cpYZlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func idQOLvKyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B9lF1raVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hbSC4I1DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0uGRPoKxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yNWzGh3OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0KWscPAIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RjDJz1emWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4vu97ogXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3n1XGMbDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PoZqdtnqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FfMMoXK8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 43AX6Q5dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mrIaCAhMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4oLecMorWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D5FpMROhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2nz82On0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D8ZMp7XHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DPUg62qFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5dAKsPc4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p3bPQBstWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vguHLICcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4w0fF7yvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DKxi6gItWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IoX9ysIyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HBrNZEuRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fMQt367kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IEzAWHe2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uAA5VbeGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uAEs4U3hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xkRxH95HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 59d9OgKpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LXdxxGMlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0qySFayfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wCCfCileWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cC4yeNMxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 48PdkI0AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NBXUn52DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MQ1IMEALWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XO5byrtoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QyYnCWNtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HWxBvzFRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uIdZhPNDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fhqpeHFhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZjATzTTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0LmAKAabWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func INxy0K6GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ih6fa6PMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dsbarn2VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LIeLhBF0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G85EdHhaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3RW3M7MqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DkVwNjzwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pnMRt8BnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QYJxf0r7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SxMsTYasWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yLxQ1XQSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6P9g8lNeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uwWzQtZ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lEzuJ6CBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6calb6uJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pDR4Opq2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KcYwV5yAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0kNAkVbMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cHeSSuKKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ub1xhlbvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RgYp51X0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Lpm0p3FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QhJB8KlxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eq3xbR35Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R51NoGTzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qHobUWxUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XOuGfN6aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FNu0YC06Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mlhnnOLJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QpQhlg3IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func guQ8mvwzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xIjLTf2GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P1ECO3J9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fUHkRNBpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func igYpiOioWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zq4kdt99Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uxvTiCG1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t7JFbChfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QIqmStiBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h5XvaqHgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vTZNrMQaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m8wBt1g7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t4elO7OEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7lzBwj8nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O3V2hGQHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E3lBpiYvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kwPqwAoRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eq4kVscVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zArkEw6pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2qfds39HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qsYvQBO4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PlfVzMdhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z1x6iY6EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GQAzTVesWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WNbarEGQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P2YW5D9MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qqwLJ9PPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lv4MmQwqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5bgQoklqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sNs9TIIXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ucKkFaDmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YuKThhJNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uZr2GLcgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QIgXUw8oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wv6NP0ktWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sspaHsO9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GpN2sCLMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BlurgaeGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OUNPzpYVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ka88r3lXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PWsiY7TaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gq42uZAmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gwQ2ZPotWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V1EpPrMSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vRFWoOnwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bJyzFpmjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qymH0zKzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 21AoQxuxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9WZfm9USWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pwIaiVaDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jRANTZHQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func le6X6NevWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OOKviuDRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f7gdIW7fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9UL4OdbYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tAM19r3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qUFKP1GRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Asmv33CLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 42dbG626Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wQsDN6ZwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dLzanGxOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WrlJh82oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4ltnjGobWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3VqQIViiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LSMLpTkPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JD2DDee4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jAIHmyyaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3wWxV1wJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1yYf8cnJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rz0jipFFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8sDU7FcjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f12n3XpuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u5pSxoK1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PVXqunraWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2SnXiXuXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Adi5LgwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H5mm8wH5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QDBzElZ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yJlmSJW1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eEhUikesWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 382B4SSLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNYq6Gw8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CSquD1kxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LVJG3rsLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ovHOPuE7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gz98SS44Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fqtzs9QbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TZOF9G6TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZyZn6RxYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HbLqR7RvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RQZU6m14Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SPRepNiWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fBYrF4gJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FLmverRmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vi085UFJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dJKVf2NTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PIbhCE18Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eLISZCokWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cYNFE58dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P7oC0wFvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vWKUaMB5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7bzUpMbbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZJsTpKzCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KLO2kzfzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YnX0fZSZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gYa07CpfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0PP1yv8RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2pVuflH1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vXE10sc9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FDdQB3VvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MwPNlpHKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WG9AoExDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1rRFN4kJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8DGxvqYYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m1H9KcDwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X0Tm8tACWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 76ClJZQ7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l2DW7fjBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jz6EjZndWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xf3UrGAuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K5S6SuY6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WxI7vol1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x4N1Ou1sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IVJqYpOdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sLBbMft1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tn7FuVVfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Raah7h5lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mf2AcoD9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HnxkLgdXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func em48vXE4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FmQtb95MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uSIYXxj7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y9lEh04wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hx7A3nVsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iEwsZaHPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZvCU8ltaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QB4IWMslWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HP8NUDJRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vRaAPaP4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W6E8Z74lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qWr4N3fDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vgS9uJYVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2TBELG1dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hM4L0JPFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jhbVqFjRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ujYXaVeEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DJgghwqPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LJGPGRRAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sFSaTllLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ljY2v5wiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2b1je9BvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eqExDlunWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pldJXtZ3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S5wubVGwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W7j3rhcFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bHMva8cnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CN5IL8qNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z8wEhyIQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BksvmUv1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z20SmPeZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FRLSQPkRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U0d8xDPSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uRknYj8QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nVCwwnYzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1JJgWWzNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0fejv3iGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fM3eEQy1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t8xOwn4lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g0bknmL4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yKc7YqugWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3kHYwvEJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HvwS1FDFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K4epD18TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u4yHeq7uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func orEMcNAUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MNk5sQqhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x6WZ5LWNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cg56MlyhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GFc48f39Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func thW1c7c9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YSbEaVQWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rTsjRL6sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R9FTjuP1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gtgWW1qJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HvpPw8CSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G3qK3jocWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FDiag0WJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qz8GxDx1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w1M0S20EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4MBdhHBpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aPd4jFZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zKfzLmkQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1diFqpF1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h7qVtkmNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qlIezNFXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nmnhnvUCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func To66GAIhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QJvo2TgKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cNjV2mLkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AYzH6oTwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GpDXCUQvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5qD9ZsJOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DA3STXhnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func msVebbQAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dYFsPAG3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8hVoGekgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SihYwIyrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SnQb4bahWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r4hPSFEzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HpjodUlkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hy1A5YBTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qf7daVkCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func szJSX1RVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s7MnWx0eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G5kbrQ8sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lsG6rTWZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OrNw7HYeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 49ZJn7lnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U5aHwGGmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UoZ563YjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i47mNlyAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lROeMPkZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NzFbWDzfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Idt2sc9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mVKKt6gfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e9cL33CWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func URLr33vEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rv3vWiRmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GsrZkFL2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ng1JC8JLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YCFxuxECWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dhm3gfQLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3qetpA8CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NqX7rCq0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cf6vXRhEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xN6UcdHpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DbB5ikicWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dRKRkDZ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6hZ4uNDRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func USk1DbkfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q72Wij9QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xjHx9vAwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DWnybHi6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UOCZvnn1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mFdjfjMpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func otcuiptKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YqAaaHH6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ojmRAXIjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wml2oHJbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gy2GUsxQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fijMVf6iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tbAGSIuUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XfYtyMewWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c5lTllMGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4F1fjsvoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LoyfSqIUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w7vssg8rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1tkFCfzSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0s9oqQO9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BJXNwMRGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wtn3zTcXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CUDaBixRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4dB1nDQ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7GYgP21pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eCryyQCtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func owo5GjaXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OBFz5qkZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func luC7DttWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QYDLbSGWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PhdW5Of8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eRo2LHE1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GYfjQFR8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7QXUELCxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dKEo3tzgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wNmQBoTzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pDQOK3goWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FqNNq2dqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QhYveyDJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PCtiOk6WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OPK1FgVrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yubZxsyMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uO66E4JJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zaXumUP3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y17JnQU6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qkZ27oVUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iH9I3iW5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RfqeIQdqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lMb0G3qRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lU6q4pcUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HcIwLi01Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GoOFwk8oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fUt7J9zuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uMobCfXPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DOj2SpNUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FL35BttSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0oFw0kWPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KubRV4lLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7D9B2CItWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3J1cuSe1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y9Blz4NyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KV5fNiTEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HiCSP7nyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dOz8gRq1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TQNASkybWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aRO3SeeIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dhoE7RLkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rqYr83giWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vu6iUSSaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0N17dmTcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c9yNqzpYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YaNfPrLUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IQcVIXN2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qg4Bb7JPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WepwWbq3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TbyMXqmwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PUMYe62RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lW8ixTO8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y5AM6qK0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GYfs64gPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sILyn9KVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wFJ4gylZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XRVzdjmdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1WvcKi75Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QRk1O7zGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qWpYRKYlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 32EA5pqWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9bMYNXsjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ws4DNCvIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P1cZXfS9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PQepmbhpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LMMcajqOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6F8Csbc2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LT3wnToDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NdFOlNhVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func okC8QsEbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yzt3XLyeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A3BdsowKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aY6N927DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n7a5cBPOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SxaWah99Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3NjnVvaGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lbLPssSnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0WEYHwX5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fGDyynDFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n3wMF5N1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CbBqb1zmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JGEwZ2CmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i8eZ75JCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MoZPekjbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jRu2yvkEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func etMCmUidWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D8kj8NlUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9YbDokXvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TKZaUOMYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sv4TUQuFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZyC4ooZWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SQOg14ShWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OwEJMlPaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jpiaHGG9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DxIr7nDiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jNaE4i9PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B6MP1YZoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UOiOv2oZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yQPm17laWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4M4NjWAoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FqTWkqAPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6PIove8RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WS7fmHKGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v0bvmiGSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func glO49n1KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wr9dhPzAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zsZU7IJLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lsz7huhuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jO3uLbOgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tu0LWDGdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LQaO23zVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bKrw71jKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m4VbUKPSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QNk1nEMBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6W421cCGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DEuEPLlEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YTbYswysWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IpBfltSRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z5lOLgyXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xXOPMjTjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zgC9ZdRGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q3Uvd5PTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4IItWi5zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jQeVzv2TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bcFjmURLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func shE50cJLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dklsXlxLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jEdiZGlnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fkbFDE0dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UUVyKZXNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HLroNHlJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VVL7EpNIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9U8esA9MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qfr1LfAJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b0nYaYRfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LxwG3pESWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DunyOHJhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1yjwza04Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5ghmjSwhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LAoVUjv5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qvTaOdCCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oytShGQGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YfxjMjzKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DtxohoS8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hCHVgz2bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ogkZEO38Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YNAntZORWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hoIL7sxuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PcAG3UmcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x371SqsdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HiZsVOzHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dNBFiFT5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C398w7yqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K5QfQ98hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y05ikILDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TSwCHYiTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L0GSj3cSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LPQ79Q1FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ItqaRSs8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p1CzuOACWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HiM5cqSlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TL6RKvxEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qpy7tppYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X0saQZa5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WsZbHnkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zsF3sd72Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6IM5IceyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1SCwga8sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pcX3A0HEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vx0qiNUHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0fjud9eUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pQW9rY9IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 74lAYUVMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B5BZmelYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3qllkzlYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IFUQcN2hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jGAdHuXTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3sjOtOktWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fqKEBzeLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func foCkjjg7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LeUD6yiFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P0BQEmz9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gaTzbWc5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 83lWiHlXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qTXLlBl8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C100eLyMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BNTs2Bx3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hOq1cIYEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lqziASFyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OGWFFiseWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ByJ8kXvdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uc6H9CeMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zEnKHv82Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ElC1JrCKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dDu5nMIiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9NC60gQIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HjXb8vV5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Iy3yYdsZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1tUWoGc6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kWlok8SjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0rQ9aNkYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gRlvGhuPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mC0LEnI4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ojoom8U9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LZpiILIlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x9WStM69Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ItzXyslRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 96we7loPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k1sZVVPGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fwd7oTGaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SE6Xz2KZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h52pieqyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QDsWloGZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MaivNcw1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZKOkLQ7oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bib8IbTmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Ggcelz2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2FRJg9FBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z16whxO9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vS1MHszoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func izHG80u4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3RWDuOKAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wUWSNoOvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OtGXL1sYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZH0nn9IWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zqBuT5MhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qqlOpgKUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wENEy0UsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ThTdntrPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rx7vcerzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zrO0l9cvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cILzBs8eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gF8tw5qwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4bWQbUNEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bTRasxeoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ss1G57SCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZKTbkgcyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hmAljLwSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vn9Bnl28Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CJaynZUhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wwhjAZrDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZ4SExvCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oG7HG8GIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i1wlLPBmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LgGGQwa5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tyN0y8fzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 08GSPAeHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jdvnyJsnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tuj0ch1aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 49T0nx0MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lSoF3TUjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FJf75BxvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MGvQtSenWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jBElB3cdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bRKwEdAnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RZyMO87eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ozWtTf03Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4JhgPH2wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o1ZZMzrPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 62TB7Nf8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g3qucPfUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7tgN02PfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lYswN8fWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NjtTUztaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cNredslBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LdKeJSXAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qtUDatSfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OLQ4rktXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vahBCa6bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9UJHLDM8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oZh3BdOCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TkJcSPwKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ctaWTdZvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mdBHvbQhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e8YlWE2hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RZb68oeYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BAzE6WVoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pVnOWRP0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TTFIfeYgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QHAEIUMIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AwC3BtAVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FVaZp7vjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nl7Ox4HqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fFCYxOexWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jH6Z9QaMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eABt8cwcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zHcLKl6jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BZrwi1PFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func doWwFCzxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t6WsfueIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func diz9iB3DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KAhAtrX4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2W6RKM8qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4JcDMjThWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YIntNXi4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9yYconTtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KviJ4NO6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EcLDE9X7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wdcbtqGQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CJh0sU7cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5JSnxCr2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wAXsxIjiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X0ryi6AEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KMq5MPmgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dPkwpOvIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CCAwCAh1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vizm9lA7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func czbAGhLsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KAXxTe8iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UDrfJJOXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IbXuJdTeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4PQc31MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fzB0UE1pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yFFxzwawWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YPQYZ0TSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XG9Pi9gCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3zqz1RaEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EYsVKkVtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JNieomlIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RW2TUWrkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8GblMdA8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5LvefqruWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func alSD0QeRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OG6ELQLjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iT7G5Jr0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DuXcQdRlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VygOLTeCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 655RAIo1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WV4FYYqIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5QGxXSioWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FpSBW9pkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4LNMSX5gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fOTW1aWWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DzEG2hS0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OctPL5MvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wBxqTnjtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rfGsV26EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 79LihEJYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7KFHHgcFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wsZ8n9FTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MZGWl3z5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VV69SwGoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HsjzqNpiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zP9dQ7BpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zALY8ZUHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cqrvSHiyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func racFqFCzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HnRxkPGvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aAm03VmiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WqKKQ2DXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EIlVb1uEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w3SIvFBnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RXnMrM4aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JISqb0FsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EyiO216qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Px11axWHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H00YmMoPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sI9dJGdlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mnhX1iULWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gptmDXbnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tcXOugcZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Z0a84qhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nNjqGAyKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mmFGcNweWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Kdl2jRPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZfcEq7yEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8isrXvEVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ew09mVMyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fW6CUqJMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cHkGNEIDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Lyw145AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EjLaGbFsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l39bhOA6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VviL9X3pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6BzwesJeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XVSQuHURWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u9ICAStjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a8cZxwB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AiSAoVH7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RowwKVthWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bqWRNRY0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9nj3tHAHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UVVMQOY5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ToGskawmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Otiyu3uaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oIhRcQWJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KI65VItSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c9kUCIWaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func piAwXqacWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Zis7I5fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OG2jZyu5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n3HwsimFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5pqZ9LaiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TnVCTTFKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yuDb3c3OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mDID8ZrkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EV79KOCEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2puuATFAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PvLkgFpMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oEavQ7HBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lc3NW4qIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bccm4vvzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5dFW666QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lvEXpuuRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fk5f5pbPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o1yRhZghWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6H9AMGRmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gVu926aRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BYQTwMM0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ukzug2sLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lT09aQpyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XkwAlVcdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IqYmMdb0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qxgEaAIIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SVIXpBSDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PIl5OSDLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QcINgmrBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lwDXOY4NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wTqSAXdbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ayIOofHGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EPXwp2kLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oeElD2yeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2zT9JPIbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dGPt4Sa2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f3e2vVdHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ofV74fpvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xRPUYSkuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KBY1LBL6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JtqMFNFxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TxXTKqOxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZaH3AXWXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FNzHlepfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iFmj2COjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vfahq0uRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tzvvV469Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lj87idHjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1QLbNQnGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9gq3dT5CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iN9FqJXWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pjNt3gEhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QRAu72kcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4YBZ8nRhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7t1g3tm4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZC8STXy8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func arwpSkSbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uXmhRt1iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tdQCB9SBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fT3hnIyFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eRIL0Yr2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dzeDPdd1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NCTt8tDRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sEO9rR8dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MgeIbcdZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YutpWDQQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0od98jFgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lQwd0AQEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func muCNc9A3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0sqn1ZvyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cSjEq9XyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D7cUXanNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5jxOBCu6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6J47zgQrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YHhwB0dvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TRri04i2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qGOhrXjdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Ojgc4vEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UYsMCUJ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EHPivEraWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gmZpWehwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YPs5w8ofWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FmvRmliPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C9dRtJwuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J0UvqD8zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7cFXBWXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BIRKP6XaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lffkE3qpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RBc8H6v6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r7BIEuCJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t4vMLmNSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JGdGCWehWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OrNntiXLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func elSF2rQXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xormiVyXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YhrHHQGHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3XFeE2coWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R0j86yIIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uYqJfkxBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ciWmoHjRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qNQH4wHfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pU2MwimtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bhhpsa3NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pjksYtNxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eUHsjtC9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y1MziN4NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2qaD1birWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b7aL5WDTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xrDYQwgFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UA5MP2meWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gMAb3DfRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ojSAFfbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iBWl1XqYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bve2dxyxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6izK5UxaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5RV9dVuAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xHVvoARGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

