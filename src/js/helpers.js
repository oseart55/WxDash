function GetIconStyle(feature) {
    if (feature.tid == 0 && feature.stat == "P") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC00lEQVQ4ja2UTWhUZxSGn/Pd3LljEkOsmlYNybRCbaPFmpgUKk2MxrFQFxZhKGhbFSkiFtEGk4VQNxK6aAmkm4Kb1i7acSeEWGyMM0Eh/bH+tYJoMQupsTW0VjF35s53XEwyP/kxBHxXl/Od9znvPffylfCMVTJbgybCL2KpxWgIR++wLnVdBDsnoP5OiL+9vcA+0BWY8YOMQNK7pwlOkA51Sdv/92cF6kA4wj96CuG1GUJUAZ/gpndpMhyT5rH+GYE6UPYCJhgEqmd6pYLu51D6NBF+W1rGzk4LTGtwonfQVq9fY6gsz9fP/GKpKIU36kyuNjyi3Lqj7oZ6iesFXpY3GS0C6jlvE0LbgZ6AY3scdkQdAEYfwDsdaZYsFIbjoRyw+2SGu6PKhnp3IYHXAX7HpIT6AQhtDYbz15Qd0Wz1x18tG+sNQ9ctf9xW6iICQOKS5eNtzriV7ap0iqB5oEgzwMYGQ9e3Qa58esgSbTTML4XTP1nqIg7/PYIrt5RoY24FyzjnLQf/ZuEOl2SBwvvHlH8fQmU5/PCzpf09l4oy+P6s5VDMYfCyZUWNsGyR5N1GlgJFwBTgPr9AWBkRLlyzVC8WjEBdRKgoM+zvDnjsQ/KKLUw3AfSLd6jcRlgJ0LbWcP6qpbJc2NyUNVYvFl5amh2UuGQ5umvSLxyY4WKg0AfjwAbDF/EMjlH2bHFyLZubDP0Xsx+nZXVRwt+k9dHdYqDlKwwHALfldcPOroBUWvnuUzcPbDTs/iyg6VVDabiQJ19OPOWA0urf1ET4c9DOsjC8UiOkA2HB/LytebVh9IESbXQKYDrEiP/1FCAAI2NHqPJWIWxJ9rhM1jwPHp/xCkt/IiXvSiyVmRYoMTIa97dS5XUhHJwysFi9pEMfTr5xphgkRgb8wzroHcfyERAFagEX+AvVJJhvZP3YAPhTpsyYQN7ybwDtT0k4rWa9seeqJxvl8iEkTUGCAAAAAElFTkSuQmCC"
    }
    if (feature.tid == 0 && feature.stat == "C") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADSUlEQVQ4ja2UTWhcVRTH/+d9z7yZxJlkZvImRpNJO22UbhRpN4KoC0GpNGnA0i66clXdWDAtgc4ipO1GJIIgCG78QIJtA34tXUQQlVZMxKbFxjTOvHxMJua9GeZ93ttFmMlMTQgF/6vL4dzfPefce/8S/mdJ+yX0XX0jG7DQYEIog9HaqnvkbxQK7NGAH70pZzcrI5xhNGDBkwAgMAEAYGjzFUye/NYR6JPNsemtfYF9V49n/crGexx0ALTLYRxJEM5EGDuuToyOrYxP/7wnsHfyRFfAxI8JSO/VUpNL1CGIfKrn8vBbKxeu/bIrkDFM1H9fyqt5wxZ0JWzE3T+KHRRRQiWXqjViYbmqBOt2XBsyriSnTp+ovP2Z1QbMTI4cBdFz1ndzfXE3KEaPDVYAgFUdqfL5TwcEXfUzF1+ba+RXf7idYTVXUocMW6s6ZwFMtQFFolc5AHWg2/KWyrEG0LltxpUnumzf/Ff3i5ua3JtwAMBbrsSiR3NrAMAFegXABwB4a8vPAICSS9nV2bs9jaC3sNKpDKYtQZVC50+zU+5NOKzuicG6HdGGDGt7oEhnJ15/vDQ+s9wK7AYA9bBhb838NsBqnijoSuguljuSLxxe8TQ5rM//k4i//NSqe2c1JiajrpjQ/eZuElMAdoAc8AFIYmfUl7r0untvLSYmoh4IXO5NOEJEYfb3c33cCwRvcT2u9qes1gsNwb22GRJgciAHAMpAyvIX12OBKQdqbnujmNQ94bGI5/21pntLG7HYi0NmK1AimG1ATvQjON8GHszYtdm7GQjg0WcHyo0cNZfecu6sdoQb1Yh2KGM3aZwvFC9e32ivMPCuQZRPcUDS8hnbun6zn4eMtDPZe40cJZ+xrBu3+iWjs0aK3PzPJApfNittLErjM8vZyyOfAnSWVJmJSd3hjFPrA9fyPdUtxxfVwXRzfgTMl+pPfw1MtwMBoOQe+dDQ5gfB8Xz3uZcW8JBIkVjPxPCtZqdAkWT5PC7suE+7ORQKzCwU3skqc+c46DQI4sPQHfFZl4RLm+e/aHOc/9pXocBKwFT2yugNzvgwJ36MAAMgiQNlADdJ4N+Y7371627H7GmwpbHp+wDe37vC3bWvYz+qHgAIBU6QUlKXTQAAAABJRU5ErkJggg=="
    }
    if (feature.tid == 1 && feature.stat == "P") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACIklEQVQ4ja2USWhTURSGv3MzvIALcSB1wlYqljpRUIoo1hZacaFgN9kIiiAibkQUW7ALF0LcuHOjdNO6kSwdqBtNk4ogCIIoghSHhdRoo6gIecl777jIYF6GxoD/6t57zv3OOT+XG+Q/K9gqQVORTXh0YjRMQD+xL/9GBK8toL4mzFfrDHAWtAdTCrgCaeuLprhNIRyX4V/ZlkBNRrpY1LsIO5o0EQUuECqc1HQkJgO5R02Bmly2BuPMARuajVSVvRJlRlORQ3Ig97hxh8aZLsMWfyhPXmolFAjA6uXQ32sImMpxCLyEPmWL7OWbD6iz1ggwUt6/eq+MThTY1SPFuMJCFoIBuH8txM5uKWXKKhxrDOyxmg71OAjVChh4fitc2bseHBkvcHnS4V48VHWVY6qMi6B/gSIDS3tWLDC82zD10K0NrWfW6gZ7vtrDta2A2Z9KIunR32vqg0bWAT5gHghV57gedMXyADguZL4rfZuFq6caPF8jNlR7qHxA2FY74p0rwdJa6FgBGzv8PlfkmI9+oDADfiDAnq0NxqvXCxn6/dkP9LiJ4Rw1Y/+b5EZ5VQHKkD2vqch10PH2YPqMjD1VBwQgk5sgam1HODzYZ3CSVivaOyQ4KrF85R35gBLD1YR9lKgVRzhfV9CvBxTCJ2p/nLoLEsMF+5LOWZN4nAYOAp0UvV1ANQ1mWgZzSbDrqjTtQPbbb4GLS3TYUC1/7Hb1BzTmqGZlapy9AAAAAElFTkSuQmCC"
    }
    if (feature.tid == 1 && feature.stat == "C") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACbklEQVQ4ja2UXUhTYRzGn/97ztkcqOXXbEclcl0EYRddZATRXUSBoUsqDPImryqChDQGHUKm3kQsCAKhmyJqZAlW91E3GUK4iEgiNM80cqv82Idn778LdXrm5hJ6rt4vfv/neb9U/GephRbU9Z/RLZn2SJHWIOnHTLLhGwxDbg14r0PTY1EfS7Ra0toJAEIKAICnKBxF4NTLhKD7sa7Q74LAuv4mfSk6e4tBu0E5ijHKQTjnkrLJ2dPaNe0PvcsLrAk0V1hSGSDAnS9ShktUKhQO7uhtuTTdPTiSE8ik3MQKLD2fUFNfZoozkyRYKXFajl2VixCCl81CFRB95cG25ujlh39swOqAr5GBxtW+9T3m+vVkxKtWly6uRIVcSGog4rLzh8YdteXxleFtRfOJdgBBG1AhOsHZuYi46srRT5m+lDQ78No792qspuLCkfFMMkHHANwBwOsj7y+0bxCCHfXuucSHiQrbOMOt95ysNf1Dk+uBlYV4cj6hJj5OlWn69oUNk6RUAVgDMrCE7GvETDOB4YZlGpOMp1S1qjRecnyfmc1Lg1NYDyAgwkC9vSpx2ekDX5fjEpQS15JSWZzK5V4lRGxAJnoL5vrshQ6ve2O8bDF/nrr+bNbu0EoNQtHO8j+872yRIh5nnK42TP/QpN7rewBQ+5ZgQNiM7x0GQnYgAJjJhrueorAXjMPOPZ45T8A3uhmMgSnStE50r/0+9niGISOGcVV3jF1kUBsIyia4N0kSN2Kdj2w/zsb9MgxpAkG9r/U5S25h4oMEeABSGfgJYJQEv4hce/o+V5m8B2B2hSYA3M7vMLe2fKKF9Bdx+t7iwqQU3wAAAABJRU5ErkJggg=="
    }
    if (feature.tid == 2 && feature.stat == "P") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACaklEQVQ4ja2US0hUURjHf9/RO3eqTZkNppaFYUSPRYuIIl9oD2hRkEoFRpuIFkUU6mIW1cZVQRH0wE22sSkoBHFl44w9FAJr0YOSyCDUHi6SZK5z7z0t1HGucycR+lb3nPs/v/P/f4dzcvnPlbuQQMeC63EpQekAOfobu6fei+AuCqjfEuCHeRo4A3ojauaHIxA3v+sY90kGWqVm4teCQB0NruOn7kTYmsVECLiAkTyp48F6KU/0ZAXq6LIClN0HFGeLlKbOQ9OtY8H9UpF46u9Q2e1AcfyNy/hv2LdDscT0YgY/aYZHNQd2KkwDA9yIfkGZ7GLcA9S9Zi1QC9B022HgnUvkskFdpfIAj11J8uGrZuRxgII8AWQlttkMVvM8h7oRJDXaUCQ8jDoe4OshzcSkX3qOa02LCHoOKFKerqmrUtx45DCZgKXB6bmOHoeGasW1iDMfWUSvWQrWUHoPV6cr1oaEbaWKrn435TISdXlwyfADgpJCwAOcAox0TUO1IjIT++Vbl6J8YU3IJ/I00IL0Hmq+IGz2xK5UhNtsJhPQ0eNytEaRtWw17AUK3eAFFuYL28sUnc9dnjxzeXXXwPG/dINS9WfUC3S5g+KcX+xwm82mEmHVcmF0XPvw5ObsVwooVdaQjgWvgm5Jlx6pUJy9bhNuzMmSVQ8wZt3LAAIwlggTMrf03zIOzk6FVgh2dO66FOQJOpYaf0ZyD0v9VOrYPUCpx9ER6xAhsxXhfMaG3uoiGTgx/8XJWCD1OGA16T6zDZdTwF6ghOnejqB1HFS7VCaiYGXsktWB7LE+Ahf/4dC3FnyxF1t/Af0c0inoMhVpAAAAAElFTkSuQmCC"
    }
    if (feature.tid == 2 && feature.stat == "C") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC0klEQVQ4ja2UX0hTYRjGn++cMz3bzLmps51plgVRuosksqtuoggCQ6dg2IVXXfXnIiENoRHin5uIBUEQdFNEjSyhPxAEXdRNppFallDa1G2ZnqWo85ydnbcr3TluIkHv1ffB8/2+9/m+l0fAfy5hK0FZb5Ok6SmPzqUs0NnsL8U3iUBA/zfg7bMWKS77SUejpmvlAMDpHADAI47K6Gp4scqxu/G20MKWwLLeWikpz18nsD1gWS4juMBwxqrrtbmdjW2xjtD7TYHerrpCTefvMMC9maV1LmP5HE/B7d3152PtfQNZgcT4awDcyngsT19WBLHSu8hyBNN7qT/nbCl5OUf0lS5A4AUOXI8r2FwnX7i/aAKWdPlrCKgBgMWXI6VabMHu8NMP28GdcSPwz6OBXSl5WXRXFA/zDluSAIe4tNoCIGgC8oydJMNB3mFVlNFppxGohudspGh8hn2OnQBwEwAZLVcbRbn7pHhicNJNapJjORYdABJDYae4X5JXBiZKzES4pc5TpZGO/ikjsMioEZw2lS/alkgMzzjWulTGos6CpkMTGUAAYHwxgDSQgCQ2fJJY5ZXXbKvfZ+1cnpjkXXY1AwYgBVJhBDAgSkCFUWQ7sCP++81XL6lJLvEx7LL6vHI2GAAIDFETkBh7ByITkHfak4I7fyXxabpgdTxWUHT86BiIMsed6NvMlSfz5g41tQ+85TRtsG2t8spLr79IQmHeKp9v1VILK5aNPMZzD9c7XVtEOvqnpG7/PYC1GMVidXl88dXnMvuRvdFsVhkwGklUPgNCZiAARBTfLY84urv44rG07Xyr5unyD63vHbakp7thEAAImGEWSyva0+ljDodAQI8GApeknJFzBNYMhowhThe9VRh3Nd76wJQ4mfEVCOgRICj1ND4lneqJ0WEGeAAmEDAHYIhx9Dx6+fGHbNdsGrCRtlAYwI3NO8xeWyb2v9Zf0s8UTGLM7vsAAAAASUVORK5CYII="
    }
    if ((feature.tid == 4 || feature.tid == 8 || feature.tid == 3) && feature.stat == "P") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB+0lEQVQ4ja2UPWgUQRiGn2/vbnfBRoweaoT4AwoaqxSCYjR4EQsLbc6AoIggkkY0YlLY2BgE7WwEGyM2AUFEiUH0chcIxsYqCBJEIaLnT5oo3t7t7WcRL+7s3Xo58a12Zt/vmXe+YSbJf1aymUHz7iYCOrDUJqEf2FN+LULQElBnsPninAX6Qbdh/f5RFSg4nzXPXSr2sGQWvjUFas7dyFd9iLAzJkQaGCBVOaUFNyvdpWexQM2tWIvlTwIb4rYUcq9CGdO8e0j2lZ43Tmj5IzXYo6mAXduFNSvFsIy/DOjcLLSvFoAUBKM6xVbZzbwB1AmnF+itjfuuVHhwNUWmywSevuZzvT9J34HavLThO4PgDUYS6gkwi5ct5bgqQyLoH6BI97/RAGhnwtkC3my4h+uirntPA17MqDG38FOjtkVZsh4wgGUgFfYU55WEZZThV2MyWuJBuIfKO4QdYc+FYwkyXSbxyXTMJfGt9yZQGAMT2IJeSc+PTyYw4BYW54hse3mSm7WvJaD0eLOad2+ADrUG02mK3p06IADF0mXSTifC4e/jTsPyuft2ePgWSR6VbHnpqAygZKnqqHeEtDOMcL5uQVOPqdgnoy9OXYFkqYJ3SSed2wScAQ4CHSz29iOqBbBGZH8pB17dKrEJZK/3Brj4l4QN1fTFblW/AKhGmk7lgHsPAAAAAElFTkSuQmCC"
    }
    if ((feature.tid == 4 || feature.tid == 8 || feature.tid == 3) && feature.stat == "C") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACQklEQVQ4ja2UzWsTURTFz32TpKnVhMTaNhOLNuqqdiNoBXGtIFbSGFTqoitX6saCqQQcSknbjUgEQRDcKCKhtcWPv0A3Wqwf2bgQtGknbTEJDZY0TfKuC02biRNixLN6A+f93j33vnkW/GdZ6hk6J86rRVnySFGyQtLKcr7nKzRNNga8d8mqZtIBlggWZXEPAAgpAAAeezyNyNmX64IeZEKx1brAzok+tZBO3WLQfpDJYQw3CBebpexrGg2GlsKxNzWB3oh/Z1Eq9wloqxVpk0vkEApHO8b6rywNT701BTIpI/gNy31IOG1drWuKo7lY6cnFFxw2ryunuFoKDFgExLg7OuBPX32UNQDbI4FeBnrL36uTsz7XuSNflG5vthKYnZ7bu+PEwYVth7vSvzoAp/3H+iCAqAGoEJ3iejlrxRd0EsAdAFwZ+dA/8gBGmzp6ZrcenklUAlurfbn38+78t1SLYW+hJEyhpOwCsAVkoICqIZXW8hYIMnZCstllQgm8gUoAAUkGfJWm7ccOrDRVDWV59JnTDGghJA1AJnoNZp+Zua6YPy/eeJoyVljcmIJivcB/8X9XixTxZLPS8kIPzyTUscBDgAYbggFxPdf9HIgZgQCg53vueuzxfWAc7xjxz5kB2sOnP5bXDCyS1TqE4a3XxxhP02RS066ptk+XGTQAglK7Nn6VJ3EzM/TY8OL82S9NkzoQVceD0yy5n4mPEuAByMLAdwDvSPCL5PXJWbNjag5AD8XmAdyuXaG5Gp5oPf0ESYXGQgmmBmoAAAAASUVORK5CYII="
    }
    if ((feature.tid == 6 || feature.tid == 5 || feature.tid == 9) && feature.stat == "P") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACnklEQVQ4ja2UW4hNYRTHf+vbZ599xBOaxiC3mMKUiYgzGMa4RMZQ09TUMCnJNZFxK0lCUh54EA8Oiry4JR4wF5JrvEiYJpL75UVy9jl77+VhzMw+58xpUtbTt7//+n7ff62+vSL854j0lqAtsREEDMNoFEvfE0+9ECH4J6A+J8pXZzWwBrQY81fwBVqdL9rCGdLR/TLn5/degdoUG843vYJQksdEAbAZO92grbEamZG8lReoTX0LMd4dYEi+kkLZ/VGua0tsvsxM3u7ZofFOZ8Mev1TuPw8QgSljDZOKJSzbEFzQe4yRafzIAGqzUwlUhrMbDnhcvutTPqGjiTtPeCyOWyR2RJAurgzAcxrBbcxyqPXQffuTl8q5mz7t56MUDezYf/dFGVufou6RYd5kEzpKnSrbRNBuoMiMsLtfScWywLK694YWCOd324wsyigbYDDNzihw28I9HBTOKCsxxMcbiutSLI5blJcKFRMNC6caegwjRUAGMAXYXbqBG4dsrt4LuHw3YM8pn5UHParKDGd32fTrkwN0IdxD5Q3CuM5PP4BUGqrKDFVlHa6evlZq96TZm/A4uDrrCXvmbSZQuA7dwPVHPD58Vy7t6zJN6Wihfp7Fwxc5f95TmfXrUyYw4DiGjZ1l11UaZm9Kc+yiz4oFFo4Nz9qUxA2fDcusLJ4c7Vx1AWWW26YtscOg2wDiJYbEdpvG4x7rjnhELIhFYd1Si7XVYaA+4LObyAEC8Dm5iwJnPMIigNoKQ21FlE8/lN8uDB4oRO2ME+1IpFpqUn6PQKnB1wvuEgqc/QibOvXC/jnvDuAa6ejy7ImTM22kBh/crXrHOUnAKmAuMIyO3n5EtRXMaSlPNoGbc0veASvT3VfAlnx6vuh1Yv9r/AFAS9h8o3r/zQAAAABJRU5ErkJggg=="
    }
    if ((feature.tid == 6 || feature.tid == 5 || feature.tid == 9) && feature.stat == "C") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADD0lEQVQ4ja2UXUiTYRTH/+f92JfWdLrZZmtNLQKTzD7MoKirgiBLE4oKuoi6qW4KshAaEVY3IQZBEESQhIwsoQ+qiyL6APsAc5ISlWlupe51zaX7fE83NfdmJkHn6uF5Dr9zzv85/CX855BmSnCe3e5Iqim7KqRkqDT0NVbWB49H/TfgxX2yY1SpZRV1STXpAgBBFQAAdoNPQeO2O1GBLo/We7/NCHSe3exIKMFzDCoB/aEYwwLCLqOqbtafqqv/0uDtmBZY2Lg1L6mKlwiwTTdSmks0WxC5ec7pmoNfjrW9+COQSTyJ32Dxj8OmRF8wGwSWXXnfdW7r+GSzkAQIZyzNO7cqh1rCGmBBY20lA5WZsFDL8/nRd19zZKdlDADGHvYU6ktsodzdq/syoGZDJLoHQLMGKBJtYk1nI6bo24DFenhDl5iblQCAlBLRDTc9KJ3wfVaMi+eG01CBNgI4D4AzR67QjJ9ICiBiCJM/I1qy4+ba5R/k/FkxraCwOU5Vz/U3tA9kAvMzc/QLCiJSYU5k+Nz9Un2JLaRzWyOGRfawcYlzyqoAAEi0ApgEMpDIlABEyN+/7t1EZ39OrNufE3ncaw/f7nTpim0hy+6qj6SXNcudAsc1GhIQYKAonaGqxEmVjOWukLHcFQKA+KcRU6i1wx2+22U3b6kYzARKhIAGyERPwZwGhryvnKmxCTlv79r3v+50rvxxQ5lTSQwqJq2G3Dt4/EZQ22Ey3gZR3sE/74wVTkW58mzh90c9VlNVcZAkkeP9QWP0zUBe1sqiIa18Qmu6018Hf0P7gON07VWA9gCAfsGciLl6ad/Yg+7C8D3fPAjEJApsXDZ/KGv9ojSQAJ9/ovQW4NUCAcAfK7tgN/iKwVgDAKYVbsW0wq2kvo3LHE8KUm5WHJKYXlcGBkmWj+DYpPtozcHjUQMez2GHrusAg3aCIAKAaDYlMCX4SYyEE6NHrmnWaKp9eTyqH2h2nKm7ySrXMPEqAuwASQyMAHhNAt8OHL3+cmqRvxisv97bD6BpuvfpYkbH/tf4ASopKNSEDc9ZAAAAAElFTkSuQmCC"
    }
    if (feature.tid == 7 && feature.stat == "P") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACoklEQVQ4ja2US0hUYRTHf+fembmjmZHZkJlkBBlpESQVRZaREdFCN5MQFS2KsCB6KhQUtDDotagWgRTZJloGZUVlPhDsQRE9KCxsIZmV9tCa69y5p8U4NuM4iNBZne/7n+/3ne9/L8fDfw7PWAXa5J+Fy0wM9WFqF8sH34jgjguor/DxxdoJVIEWYAwJEYFmq0ebuErYVytrfn0bE6iN/ny+6g2E+SmaCAD78Ya3abM/KCWh+ymB2jhhGobTAsxI9aS46iyUBm3yr5OVoQejd2g49SNhzzuUtpdRyxbNEZbMM+JlL7jXtY05sozeBKA+tMqAstj6dwi21oa53e6ycqFBZjocu6wsmC1cO+ohe5IMVcoUHKsa7OoRHeoWkOHVnnMO77uU1/U+8gLR/f4/UHE4zKbjDndOeeOOskmVGhH0H1CkJJb29CmXb0VoveAdhgFkpMGlGg/5Gwd58lYpLhjWcnlozQa7I97DnFjy6I3i88LiuQl+AZAXEArzhdYXLsUF5j/BkOlAAnAwajL8/A0ZaYKRzANgYrrwvV8TNw2xId5DpROhECA3G77+UAZCMMGfDOzsVnKnjrjNMT4mAoUGiAKXFRlMyRSu3I5QVW4mnLv72KW7V1m/NAH4TEoHuhOBLhcx2AN4vR44s9tk11mHjDSoXG3iMeHeU5dtJxwOVprkZkscT87HsmGglNod2uQ/DVoDsHmtieUVjtQ5bD/p4DEhM104UGmyLxjftbbz2b6SBATgc+gIAasIYQNAsNQgWOqjp08JRyAnK+lDfUA8FRIcjIwKlCARvW6XE7BqEfbG9MBkYZS4Sdi3deTESZo2EiQC9iFtsepw2QGsBWYS/aU+odoMRr2sCjWCnXRLygErK+x3wIFUeqoYc2KPN/4Cgx7Wn0G4aqEAAAAASUVORK5CYII="
    }
    if (feature.tid == 7 && feature.stat == "C") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADFElEQVQ4ja2UW2hUVxSG/7X3OTOTM8nEzDjaTBx1EgVpzUvRmj4I+iAKgqIxpWILgtC+tFKoYJSAg0hUKKWkIAgFX6oiwRt4wQdfRBFvedCI2NKkXjJJzFxMjHNybnv5YmbmmKRB6Hra7LP3t9b619m/hv85tNkOJI9+nXCVV6+Ep0PRq2Gr+V+k0+rjgMe/0xOFfCsrtLnKXQQAQgkAQH2oN4/ObVcmBJ0otHePzgpMHt2UcPK5Xxm0BDRNMkYUhG+qlNoUPNTWPtTRfXdGYEPnlpir5B8EzJuppRKXKCIkd31yeOuPQ/vO3ZsWyCQP4gOY/TxrOH3ZMADoC2PFQGP8bblYaALiSLRrx5b87pNjPuD8ztZVDKwqHbYd8frUncVW30itnoy+EUHNG7/xV0LGa8y6b7/sk9Uh9z20NjQ+sRNAlw8oiTZyRWWjZx8k3UIxGP9p3WMZrbYBgC1H5E7cbCqcvJ2a+/3av0vJBW0A8DsArmz588mFN2Zq5qOBWGzX6qeTMACgoK7qvlr57NUv15rt/hEjkIoX3/c+L3Fo84JMx8UXlcC5Jd36s2GSxJV6lTqJVttaLGxa/dnqEhAASMYBlIEMOJMS8IQtSdcUaLr/BqCA5rFp+wbqgW2fhgQMMtAIALLWcJRpa2w5goL6lFfhjZpBGanKVe5phEEfkIlugbkRAIJL54+LkO4Wb/8TC69ZNlJ50eodiKiirYeWN5RfCfPTgf3nc/4KXfscpL6dAQ1ScM365S/Hrj5MUlBTxspUHlKw9TgTeX2hZ7HxRWpI1oWdsnziTKnSyUWm4+KLxOHWPwHaCQBGS1MOmlDj1580jF5+uIiImALSM1qWDNes+3S4QqrejPnZJaDbDwSAjNV8rD7U2wTGagAwVqQKxopUwRszNXiK5BzDqRwUAwOk63uwr+w+fnNIp9VgOv1zIvDoBwbtAEECgIxUuR8OBuCbFokDhT2nfY4z1b7SaZUBuhJH2i6w4q1M3EJAPUAaA1kAPST48uDes/enJvkPg820dz8H8NtM32eKWR37Y+MdY50pWVaonj8AAAAASUVORK5CYII="
    }
    if (feature.dn == 5) {
        return "#e6bb63"
    }
    if (feature.dn == 8) {
        return "#f56063"
    }
    if (feature.dn == 10) {
        return "#e660c8"
    }
    if (feature.prob2day == "30%" || feature.prob2day == "20%" || feature.prob2day == "10%") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABEklEQVRIib2WQZLDIAwEmyr+teRltn+mnymHQBYDApFsrU7GlmgoNGMi/xBx9FKVFAKyO5kqJyBtbRwkHfkZ4AqB0zn5kYeHKhICjw7SJFIVMAMZdUmVs9TFnJgGiUuQAajrJASk7CRZK7VAC8AtIryKVZcFb9AO4A3JcTkKD1V+WO8cXk0jN0heIQ6QF3CWwa2FN0BuQAf5A9BQV0PFfwgyhTuEVCDvIctMsCYkt6kHAI3CXZBdHeQwnaGDfAiYgkwX/iI60MqFRyFsel29Ew/g2vCuA3qrdwHAr6PScWYLW4ASTpDAr9WLqunCppIXILFcuFX48h9vgKYu/MjnkzwXiAYk1Vjq7yMXFti/Ds2uUE+JYKMPKWX16gAAAABJRU5ErkJggg=="
    }
    if (feature.prob2day == "60%" || feature.prob2day == "50%" || feature.prob2day == "40%") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABUElEQVRIib2W25GDMAxFjzNuAraYON2EKiBVmHJohtBFvB/gxBg/RHZm9Qe2fDSyrizNP5hO/VwspumYzh42W4YLTLGvjjcpRe+A5wjO8fjpGCSHK0UP4KBfRqbmzu0ACTd6U4p+tlACpfwcmNkyeD8Na3pctFECSgFCv8WuqdMALzAqF2oGVALEpmF1fo5lhxB0BvCGwHrJNUel6JeRqwNTO9g5Hu1WZW/IFiE1kBQQpnZXwlLQGcAB8ldQTldJxX8DKgk3CfEg6SUrmNqCYLOQ2TJIAHBUuAhyVgdQ7gwHyDeAGijZhb8BlEDFLpw8BKbaXcUgHS7UAFurEPWubf0DWSzGCQA+MqmOfMVlSzgH8CYBXQgaZNMxzTbdhUtKLoFU8NbvunCscMkbnwL5u/Pfu3Q1d26LxbzASAaIXYD2M6G0pWkF1tTB+XGoNEL9Avnry7fiLeQIAAAAAElFTkSuQmCC"
    }
    if (feature.prob2day == "70%" || feature.prob2day == "80%" || feature.prob2day == "90%" || feature.prob2day == "100%") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABLElEQVRIicXV0ZWDIBCF4Z+cNOFJMUsqUyoLW4xrF7IPCjvBgeDGJPdFHsQPEIYzb8r5Y9AIg4EewIAHXLc8i5nAzmAN9Ab8DN8XGIqQRAACWMBOcC1hE9gANyP6GLAjILEE5YhMgJuGRUTrY6CXWIJO8BW0HgWshkiMHFqXqZqIxfaj9+OAOvAScqWly7EWAJbNFFdALp0PDdDOuNhIUAd+guueEddiss1zt72PwnJkAx2BaYgKPYOVkCL0iqhQy2HUUqogKvRf5BF2Bz2L1LAEHYWUMDmjo6sC81I//6B1Nrals9lRVDfVuwP/04iIa2LXOWuu3vlhbDnUQSuqFxhG0nSrSAsWwKlXucTW29YGcCdxp2iJGNDH/5wjGyhipY/WMBbQvqXW1Wb+C9vxlwlVxQyMAAAAAElFTkSuQmCC"
    }
    if (feature.WIND_SPEED == 0) {
        return { radius: 1, color: '#bcb53e', opacity: 0.75 }
    }
    if (feature.WIND_SPEED < 12) {
        return { radius: 1, color: '#bfb840', opacity: 0.75 }
    }
    if (feature.WIND_SPEED < 39) {
        return { radius: 1, color: '#f2cb66', opacity: 0.75 }
    }
    if (feature.WIND_SPEED < 62) {
        return { radius: 1, color: '#eea340', opacity: 0.75 }
    }
    if (feature.WIND_SPEED < 89) {
        return { radius: 1, color: '#dc5f30', opacity: 0.75 }
    }
    if (feature.WIND_SPEED < 118) {
        return { radius: 1, color: '#a80000', opacity: 0.75 }
    }
    if (feature.WIND_SPEED >= 118) {
        return { radius: 1, color: '#ff0000',opacity: 0.75}
    }
    if (feature.hazard == "TURB") {
        return { fillColor: "#cfaf7f",weight: 2,opacity: 1}
    }
}

firePointFeatureLayer_Legend = L.control.Legend({
    position: "bottomleft",
    legends: [
        {
            label: "Wildfire Pending",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC00lEQVQ4ja2UTWhUZxSGn/Pd3LljEkOsmlYNybRCbaPFmpgUKk2MxrFQFxZhKGhbFSkiFtEGk4VQNxK6aAmkm4Kb1i7acSeEWGyMM0Eh/bH+tYJoMQupsTW0VjF35s53XEwyP/kxBHxXl/Od9znvPffylfCMVTJbgybCL2KpxWgIR++wLnVdBDsnoP5OiL+9vcA+0BWY8YOMQNK7pwlOkA51Sdv/92cF6kA4wj96CuG1GUJUAZ/gpndpMhyT5rH+GYE6UPYCJhgEqmd6pYLu51D6NBF+W1rGzk4LTGtwonfQVq9fY6gsz9fP/GKpKIU36kyuNjyi3Lqj7oZ6iesFXpY3GS0C6jlvE0LbgZ6AY3scdkQdAEYfwDsdaZYsFIbjoRyw+2SGu6PKhnp3IYHXAX7HpIT6AQhtDYbz15Qd0Wz1x18tG+sNQ9ctf9xW6iICQOKS5eNtzriV7ap0iqB5oEgzwMYGQ9e3Qa58esgSbTTML4XTP1nqIg7/PYIrt5RoY24FyzjnLQf/ZuEOl2SBwvvHlH8fQmU5/PCzpf09l4oy+P6s5VDMYfCyZUWNsGyR5N1GlgJFwBTgPr9AWBkRLlyzVC8WjEBdRKgoM+zvDnjsQ/KKLUw3AfSLd6jcRlgJ0LbWcP6qpbJc2NyUNVYvFl5amh2UuGQ5umvSLxyY4WKg0AfjwAbDF/EMjlH2bHFyLZubDP0Xsx+nZXVRwt+k9dHdYqDlKwwHALfldcPOroBUWvnuUzcPbDTs/iyg6VVDabiQJ19OPOWA0urf1ET4c9DOsjC8UiOkA2HB/LytebVh9IESbXQKYDrEiP/1FCAAI2NHqPJWIWxJ9rhM1jwPHp/xCkt/IiXvSiyVmRYoMTIa97dS5XUhHJwysFi9pEMfTr5xphgkRgb8wzroHcfyERAFagEX+AvVJJhvZP3YAPhTpsyYQN7ybwDtT0k4rWa9seeqJxvl8iEkTUGCAAAAAElFTkSuQmCC",
        },
        {
            label: "Wildfire Completed",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADSUlEQVQ4ja2UTWhcVRTH/+d9z7yZxJlkZvImRpNJO22UbhRpN4KoC0GpNGnA0i66clXdWDAtgc4ipO1GJIIgCG78QIJtA34tXUQQlVZMxKbFxjTOvHxMJua9GeZ93ttFmMlMTQgF/6vL4dzfPefce/8S/mdJ+yX0XX0jG7DQYEIog9HaqnvkbxQK7NGAH70pZzcrI5xhNGDBkwAgMAEAYGjzFUye/NYR6JPNsemtfYF9V49n/crGexx0ALTLYRxJEM5EGDuuToyOrYxP/7wnsHfyRFfAxI8JSO/VUpNL1CGIfKrn8vBbKxeu/bIrkDFM1H9fyqt5wxZ0JWzE3T+KHRRRQiWXqjViYbmqBOt2XBsyriSnTp+ovP2Z1QbMTI4cBdFz1ndzfXE3KEaPDVYAgFUdqfL5TwcEXfUzF1+ba+RXf7idYTVXUocMW6s6ZwFMtQFFolc5AHWg2/KWyrEG0LltxpUnumzf/Ff3i5ua3JtwAMBbrsSiR3NrAMAFegXABwB4a8vPAICSS9nV2bs9jaC3sNKpDKYtQZVC50+zU+5NOKzuicG6HdGGDGt7oEhnJ15/vDQ+s9wK7AYA9bBhb838NsBqnijoSuguljuSLxxe8TQ5rM//k4i//NSqe2c1JiajrpjQ/eZuElMAdoAc8AFIYmfUl7r0untvLSYmoh4IXO5NOEJEYfb3c33cCwRvcT2u9qes1gsNwb22GRJgciAHAMpAyvIX12OBKQdqbnujmNQ94bGI5/21pntLG7HYi0NmK1AimG1ATvQjON8GHszYtdm7GQjg0WcHyo0cNZfecu6sdoQb1Yh2KGM3aZwvFC9e32ivMPCuQZRPcUDS8hnbun6zn4eMtDPZe40cJZ+xrBu3+iWjs0aK3PzPJApfNittLErjM8vZyyOfAnSWVJmJSd3hjFPrA9fyPdUtxxfVwXRzfgTMl+pPfw1MtwMBoOQe+dDQ5gfB8Xz3uZcW8JBIkVjPxPCtZqdAkWT5PC7suE+7ORQKzCwU3skqc+c46DQI4sPQHfFZl4RLm+e/aHOc/9pXocBKwFT2yugNzvgwJ36MAAMgiQNlADdJ4N+Y7371627H7GmwpbHp+wDe37vC3bWvYz+qHgAIBU6QUlKXTQAAAABJRU5ErkJggg==",
        },
        {
            label: "Prescribed Pending",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACIklEQVQ4ja2USWhTURSGv3MzvIALcSB1wlYqljpRUIoo1hZacaFgN9kIiiAibkQUW7ALF0LcuHOjdNO6kSwdqBtNk4ogCIIoghSHhdRoo6gIecl777jIYF6GxoD/6t57zv3OOT+XG+Q/K9gqQVORTXh0YjRMQD+xL/9GBK8toL4mzFfrDHAWtAdTCrgCaeuLprhNIRyX4V/ZlkBNRrpY1LsIO5o0EQUuECqc1HQkJgO5R02Bmly2BuPMARuajVSVvRJlRlORQ3Ig97hxh8aZLsMWfyhPXmolFAjA6uXQ32sImMpxCLyEPmWL7OWbD6iz1ggwUt6/eq+MThTY1SPFuMJCFoIBuH8txM5uKWXKKhxrDOyxmg71OAjVChh4fitc2bseHBkvcHnS4V48VHWVY6qMi6B/gSIDS3tWLDC82zD10K0NrWfW6gZ7vtrDta2A2Z9KIunR32vqg0bWAT5gHghV57gedMXyADguZL4rfZuFq6caPF8jNlR7qHxA2FY74p0rwdJa6FgBGzv8PlfkmI9+oDADfiDAnq0NxqvXCxn6/dkP9LiJ4Rw1Y/+b5EZ5VQHKkD2vqch10PH2YPqMjD1VBwQgk5sgam1HODzYZ3CSVivaOyQ4KrF85R35gBLD1YR9lKgVRzhfV9CvBxTCJ2p/nLoLEsMF+5LOWZN4nAYOAp0UvV1ANQ1mWgZzSbDrqjTtQPbbb4GLS3TYUC1/7Hb1BzTmqGZlapy9AAAAAElFTkSuQmCC",
        },
        {
            label: "Prescribed Completed",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACbklEQVQ4ja2UXUhTYRzGn/97ztkcqOXXbEclcl0EYRddZATRXUSBoUsqDPImryqChDQGHUKm3kQsCAKhmyJqZAlW91E3GUK4iEgiNM80cqv82Idn778LdXrm5hJ6rt4vfv/neb9U/GephRbU9Z/RLZn2SJHWIOnHTLLhGwxDbg14r0PTY1EfS7Ra0toJAEIKAICnKBxF4NTLhKD7sa7Q74LAuv4mfSk6e4tBu0E5ijHKQTjnkrLJ2dPaNe0PvcsLrAk0V1hSGSDAnS9ShktUKhQO7uhtuTTdPTiSE8ik3MQKLD2fUFNfZoozkyRYKXFajl2VixCCl81CFRB95cG25ujlh39swOqAr5GBxtW+9T3m+vVkxKtWly6uRIVcSGog4rLzh8YdteXxleFtRfOJdgBBG1AhOsHZuYi46srRT5m+lDQ78No792qspuLCkfFMMkHHANwBwOsj7y+0bxCCHfXuucSHiQrbOMOt95ysNf1Dk+uBlYV4cj6hJj5OlWn69oUNk6RUAVgDMrCE7GvETDOB4YZlGpOMp1S1qjRecnyfmc1Lg1NYDyAgwkC9vSpx2ekDX5fjEpQS15JSWZzK5V4lRGxAJnoL5vrshQ6ve2O8bDF/nrr+bNbu0EoNQtHO8j+872yRIh5nnK42TP/QpN7rewBQ+5ZgQNiM7x0GQnYgAJjJhrueorAXjMPOPZ45T8A3uhmMgSnStE50r/0+9niGISOGcVV3jF1kUBsIyia4N0kSN2Kdj2w/zsb9MgxpAkG9r/U5S25h4oMEeABSGfgJYJQEv4hce/o+V5m8B2B2hSYA3M7vMLe2fKKF9Bdx+t7iwqQU3wAAAABJRU5ErkJggg==",
        },
        {
            label: "Marine Pending",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACaklEQVQ4ja2US0hUURjHf9/RO3eqTZkNppaFYUSPRYuIIl9oD2hRkEoFRpuIFkUU6mIW1cZVQRH0wE22sSkoBHFl44w9FAJr0YOSyCDUHi6SZK5z7z0t1HGucycR+lb3nPs/v/P/f4dzcvnPlbuQQMeC63EpQekAOfobu6fei+AuCqjfEuCHeRo4A3ojauaHIxA3v+sY90kGWqVm4teCQB0NruOn7kTYmsVECLiAkTyp48F6KU/0ZAXq6LIClN0HFGeLlKbOQ9OtY8H9UpF46u9Q2e1AcfyNy/hv2LdDscT0YgY/aYZHNQd2KkwDA9yIfkGZ7GLcA9S9Zi1QC9B022HgnUvkskFdpfIAj11J8uGrZuRxgII8AWQlttkMVvM8h7oRJDXaUCQ8jDoe4OshzcSkX3qOa02LCHoOKFKerqmrUtx45DCZgKXB6bmOHoeGasW1iDMfWUSvWQrWUHoPV6cr1oaEbaWKrn435TISdXlwyfADgpJCwAOcAox0TUO1IjIT++Vbl6J8YU3IJ/I00IL0Hmq+IGz2xK5UhNtsJhPQ0eNytEaRtWw17AUK3eAFFuYL28sUnc9dnjxzeXXXwPG/dINS9WfUC3S5g+KcX+xwm82mEmHVcmF0XPvw5ObsVwooVdaQjgWvgm5Jlx6pUJy9bhNuzMmSVQ8wZt3LAAIwlggTMrf03zIOzk6FVgh2dO66FOQJOpYaf0ZyD0v9VOrYPUCpx9ER6xAhsxXhfMaG3uoiGTgx/8XJWCD1OGA16T6zDZdTwF6ghOnejqB1HFS7VCaiYGXsktWB7LE+Ahf/4dC3FnyxF1t/Af0c0inoMhVpAAAAAElFTkSuQmCC",
        },
        {
            label: "Marine Completed",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC0klEQVQ4ja2UX0hTYRjGn++cMz3bzLmps51plgVRuosksqtuoggCQ6dg2IVXXfXnIiENoRHin5uIBUEQdFNEjSyhPxAEXdRNppFallDa1G2ZnqWo85ydnbcr3TluIkHv1ffB8/2+9/m+l0fAfy5hK0FZb5Ok6SmPzqUs0NnsL8U3iUBA/zfg7bMWKS77SUejpmvlAMDpHADAI47K6Gp4scqxu/G20MKWwLLeWikpz18nsD1gWS4juMBwxqrrtbmdjW2xjtD7TYHerrpCTefvMMC9maV1LmP5HE/B7d3152PtfQNZgcT4awDcyngsT19WBLHSu8hyBNN7qT/nbCl5OUf0lS5A4AUOXI8r2FwnX7i/aAKWdPlrCKgBgMWXI6VabMHu8NMP28GdcSPwz6OBXSl5WXRXFA/zDluSAIe4tNoCIGgC8oydJMNB3mFVlNFppxGohudspGh8hn2OnQBwEwAZLVcbRbn7pHhicNJNapJjORYdABJDYae4X5JXBiZKzES4pc5TpZGO/ikjsMioEZw2lS/alkgMzzjWulTGos6CpkMTGUAAYHwxgDSQgCQ2fJJY5ZXXbKvfZ+1cnpjkXXY1AwYgBVJhBDAgSkCFUWQ7sCP++81XL6lJLvEx7LL6vHI2GAAIDFETkBh7ByITkHfak4I7fyXxabpgdTxWUHT86BiIMsed6NvMlSfz5g41tQ+85TRtsG2t8spLr79IQmHeKp9v1VILK5aNPMZzD9c7XVtEOvqnpG7/PYC1GMVidXl88dXnMvuRvdFsVhkwGklUPgNCZiAARBTfLY84urv44rG07Xyr5unyD63vHbakp7thEAAImGEWSyva0+ljDodAQI8GApeknJFzBNYMhowhThe9VRh3Nd76wJQ4mfEVCOgRICj1ND4lneqJ0WEGeAAmEDAHYIhx9Dx6+fGHbNdsGrCRtlAYwI3NO8xeWyb2v9Zf0s8UTGLM7vsAAAAASUVORK5CYII=",
        },
        {
            label: "Hazmat Pending",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB+0lEQVQ4ja2UPWgUQRiGn2/vbnfBRoweaoT4AwoaqxSCYjR4EQsLbc6AoIggkkY0YlLY2BgE7WwEGyM2AUFEiUH0chcIxsYqCBJEIaLnT5oo3t7t7WcRL+7s3Xo58a12Zt/vmXe+YSbJf1aymUHz7iYCOrDUJqEf2FN+LULQElBnsPninAX6Qbdh/f5RFSg4nzXPXSr2sGQWvjUFas7dyFd9iLAzJkQaGCBVOaUFNyvdpWexQM2tWIvlTwIb4rYUcq9CGdO8e0j2lZ43Tmj5IzXYo6mAXduFNSvFsIy/DOjcLLSvFoAUBKM6xVbZzbwB1AmnF+itjfuuVHhwNUWmywSevuZzvT9J34HavLThO4PgDUYS6gkwi5ct5bgqQyLoH6BI97/RAGhnwtkC3my4h+uirntPA17MqDG38FOjtkVZsh4wgGUgFfYU55WEZZThV2MyWuJBuIfKO4QdYc+FYwkyXSbxyXTMJfGt9yZQGAMT2IJeSc+PTyYw4BYW54hse3mSm7WvJaD0eLOad2+ADrUG02mK3p06IADF0mXSTifC4e/jTsPyuft2ePgWSR6VbHnpqAygZKnqqHeEtDOMcL5uQVOPqdgnoy9OXYFkqYJ3SSed2wScAQ4CHSz29iOqBbBGZH8pB17dKrEJZK/3Brj4l4QN1fTFblW/AKhGmk7lgHsPAAAAAElFTkSuQmCC",
        },
        {
            label: "Hazmat Completed",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACQklEQVQ4ja2UzWsTURTFz32TpKnVhMTaNhOLNuqqdiNoBXGtIFbSGFTqoitX6saCqQQcSknbjUgEQRDcKCKhtcWPv0A3Wqwf2bgQtGknbTEJDZY0TfKuC02biRNixLN6A+f93j33vnkW/GdZ6hk6J86rRVnySFGyQtLKcr7nKzRNNga8d8mqZtIBlggWZXEPAAgpAAAeezyNyNmX64IeZEKx1brAzok+tZBO3WLQfpDJYQw3CBebpexrGg2GlsKxNzWB3oh/Z1Eq9wloqxVpk0vkEApHO8b6rywNT701BTIpI/gNy31IOG1drWuKo7lY6cnFFxw2ryunuFoKDFgExLg7OuBPX32UNQDbI4FeBnrL36uTsz7XuSNflG5vthKYnZ7bu+PEwYVth7vSvzoAp/3H+iCAqAGoEJ3iejlrxRd0EsAdAFwZ+dA/8gBGmzp6ZrcenklUAlurfbn38+78t1SLYW+hJEyhpOwCsAVkoICqIZXW8hYIMnZCstllQgm8gUoAAUkGfJWm7ccOrDRVDWV59JnTDGghJA1AJnoNZp+Zua6YPy/eeJoyVljcmIJivcB/8X9XixTxZLPS8kIPzyTUscBDgAYbggFxPdf9HIgZgQCg53vueuzxfWAc7xjxz5kB2sOnP5bXDCyS1TqE4a3XxxhP02RS066ptk+XGTQAglK7Nn6VJ3EzM/TY8OL82S9NkzoQVceD0yy5n4mPEuAByMLAdwDvSPCL5PXJWbNjag5AD8XmAdyuXaG5Gp5oPf0ESYXGQgmmBmoAAAAASUVORK5CYII=",
        },
        {
            label: "SAR Pending",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACnklEQVQ4ja2UW4hNYRTHf+vbZ599xBOaxiC3mMKUiYgzGMa4RMZQ09TUMCnJNZFxK0lCUh54EA8Oiry4JR4wF5JrvEiYJpL75UVy9jl77+VhzMw+58xpUtbTt7//+n7ff62+vSL854j0lqAtsREEDMNoFEvfE0+9ECH4J6A+J8pXZzWwBrQY81fwBVqdL9rCGdLR/TLn5/degdoUG843vYJQksdEAbAZO92grbEamZG8lReoTX0LMd4dYEi+kkLZ/VGua0tsvsxM3u7ZofFOZ8Mev1TuPw8QgSljDZOKJSzbEFzQe4yRafzIAGqzUwlUhrMbDnhcvutTPqGjiTtPeCyOWyR2RJAurgzAcxrBbcxyqPXQffuTl8q5mz7t56MUDezYf/dFGVufou6RYd5kEzpKnSrbRNBuoMiMsLtfScWywLK694YWCOd324wsyigbYDDNzihw28I9HBTOKCsxxMcbiutSLI5blJcKFRMNC6caegwjRUAGMAXYXbqBG4dsrt4LuHw3YM8pn5UHParKDGd32fTrkwN0IdxD5Q3CuM5PP4BUGqrKDFVlHa6evlZq96TZm/A4uDrrCXvmbSZQuA7dwPVHPD58Vy7t6zJN6Wihfp7Fwxc5f95TmfXrUyYw4DiGjZ1l11UaZm9Kc+yiz4oFFo4Nz9qUxA2fDcusLJ4c7Vx1AWWW26YtscOg2wDiJYbEdpvG4x7rjnhELIhFYd1Si7XVYaA+4LObyAEC8Dm5iwJnPMIigNoKQ21FlE8/lN8uDB4oRO2ME+1IpFpqUn6PQKnB1wvuEgqc/QibOvXC/jnvDuAa6ejy7ImTM22kBh/crXrHOUnAKmAuMIyO3n5EtRXMaSlPNoGbc0veASvT3VfAlnx6vuh1Yv9r/AFAS9h8o3r/zQAAAABJRU5ErkJggg==",
        },
        {
            label: "SAR Completed",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADD0lEQVQ4ja2UXUiTYRTH/+f92JfWdLrZZmtNLQKTzD7MoKirgiBLE4oKuoi6qW4KshAaEVY3IQZBEESQhIwsoQ+qiyL6APsAc5ISlWlupe51zaX7fE83NfdmJkHn6uF5Dr9zzv85/CX855BmSnCe3e5Iqim7KqRkqDT0NVbWB49H/TfgxX2yY1SpZRV1STXpAgBBFQAAdoNPQeO2O1GBLo/We7/NCHSe3exIKMFzDCoB/aEYwwLCLqOqbtafqqv/0uDtmBZY2Lg1L6mKlwiwTTdSmks0WxC5ec7pmoNfjrW9+COQSTyJ32Dxj8OmRF8wGwSWXXnfdW7r+GSzkAQIZyzNO7cqh1rCGmBBY20lA5WZsFDL8/nRd19zZKdlDADGHvYU6ktsodzdq/syoGZDJLoHQLMGKBJtYk1nI6bo24DFenhDl5iblQCAlBLRDTc9KJ3wfVaMi+eG01CBNgI4D4AzR67QjJ9ICiBiCJM/I1qy4+ba5R/k/FkxraCwOU5Vz/U3tA9kAvMzc/QLCiJSYU5k+Nz9Un2JLaRzWyOGRfawcYlzyqoAAEi0ApgEMpDIlABEyN+/7t1EZ39OrNufE3ncaw/f7nTpim0hy+6qj6SXNcudAsc1GhIQYKAonaGqxEmVjOWukLHcFQKA+KcRU6i1wx2+22U3b6kYzARKhIAGyERPwZwGhryvnKmxCTlv79r3v+50rvxxQ5lTSQwqJq2G3Dt4/EZQ22Ey3gZR3sE/74wVTkW58mzh90c9VlNVcZAkkeP9QWP0zUBe1sqiIa18Qmu6018Hf0P7gON07VWA9gCAfsGciLl6ad/Yg+7C8D3fPAjEJApsXDZ/KGv9ojSQAJ9/ovQW4NUCAcAfK7tgN/iKwVgDAKYVbsW0wq2kvo3LHE8KUm5WHJKYXlcGBkmWj+DYpPtozcHjUQMez2GHrusAg3aCIAKAaDYlMCX4SYyEE6NHrmnWaKp9eTyqH2h2nKm7ySrXMPEqAuwASQyMAHhNAt8OHL3+cmqRvxisv97bD6BpuvfpYkbH/tf4ASopKNSEDc9ZAAAAAElFTkSuQmCC",
        },
        {
            label: "Other Pending",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACoklEQVQ4ja2US0hUYRTHf+fembmjmZHZkJlkBBlpESQVRZaREdFCN5MQFS2KsCB6KhQUtDDotagWgRTZJloGZUVlPhDsQRE9KCxsIZmV9tCa69y5p8U4NuM4iNBZne/7n+/3ne9/L8fDfw7PWAXa5J+Fy0wM9WFqF8sH34jgjguor/DxxdoJVIEWYAwJEYFmq0ebuErYVytrfn0bE6iN/ny+6g2E+SmaCAD78Ya3abM/KCWh+ymB2jhhGobTAsxI9aS46iyUBm3yr5OVoQejd2g49SNhzzuUtpdRyxbNEZbMM+JlL7jXtY05sozeBKA+tMqAstj6dwi21oa53e6ycqFBZjocu6wsmC1cO+ohe5IMVcoUHKsa7OoRHeoWkOHVnnMO77uU1/U+8gLR/f4/UHE4zKbjDndOeeOOskmVGhH0H1CkJJb29CmXb0VoveAdhgFkpMGlGg/5Gwd58lYpLhjWcnlozQa7I97DnFjy6I3i88LiuQl+AZAXEArzhdYXLsUF5j/BkOlAAnAwajL8/A0ZaYKRzANgYrrwvV8TNw2xId5DpROhECA3G77+UAZCMMGfDOzsVnKnjrjNMT4mAoUGiAKXFRlMyRSu3I5QVW4mnLv72KW7V1m/NAH4TEoHuhOBLhcx2AN4vR44s9tk11mHjDSoXG3iMeHeU5dtJxwOVprkZkscT87HsmGglNod2uQ/DVoDsHmtieUVjtQ5bD/p4DEhM104UGmyLxjftbbz2b6SBATgc+gIAasIYQNAsNQgWOqjp08JRyAnK+lDfUA8FRIcjIwKlCARvW6XE7BqEfbG9MBkYZS4Sdi3deTESZo2EiQC9iFtsepw2QGsBWYS/aU+odoMRr2sCjWCnXRLygErK+x3wIFUeqoYc2KPN/4Cgx7Wn0G4aqEAAAAASUVORK5CYII=",
        },
        {
            label: "Other Completed",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADFElEQVQ4ja2UW2hUVxSG/7X3OTOTM8nEzDjaTBx1EgVpzUvRmj4I+iAKgqIxpWILgtC+tFKoYJSAg0hUKKWkIAgFX6oiwRt4wQdfRBFvedCI2NKkXjJJzFxMjHNybnv5YmbmmKRB6Hra7LP3t9b619m/hv85tNkOJI9+nXCVV6+Ep0PRq2Gr+V+k0+rjgMe/0xOFfCsrtLnKXQQAQgkAQH2oN4/ObVcmBJ0otHePzgpMHt2UcPK5Xxm0BDRNMkYUhG+qlNoUPNTWPtTRfXdGYEPnlpir5B8EzJuppRKXKCIkd31yeOuPQ/vO3ZsWyCQP4gOY/TxrOH3ZMADoC2PFQGP8bblYaALiSLRrx5b87pNjPuD8ztZVDKwqHbYd8frUncVW30itnoy+EUHNG7/xV0LGa8y6b7/sk9Uh9z20NjQ+sRNAlw8oiTZyRWWjZx8k3UIxGP9p3WMZrbYBgC1H5E7cbCqcvJ2a+/3av0vJBW0A8DsArmz588mFN2Zq5qOBWGzX6qeTMACgoK7qvlr57NUv15rt/hEjkIoX3/c+L3Fo84JMx8UXlcC5Jd36s2GSxJV6lTqJVttaLGxa/dnqEhAASMYBlIEMOJMS8IQtSdcUaLr/BqCA5rFp+wbqgW2fhgQMMtAIALLWcJRpa2w5goL6lFfhjZpBGanKVe5phEEfkIlugbkRAIJL54+LkO4Wb/8TC69ZNlJ50eodiKiirYeWN5RfCfPTgf3nc/4KXfscpL6dAQ1ScM365S/Hrj5MUlBTxspUHlKw9TgTeX2hZ7HxRWpI1oWdsnziTKnSyUWm4+KLxOHWPwHaCQBGS1MOmlDj1580jF5+uIiImALSM1qWDNes+3S4QqrejPnZJaDbDwSAjNV8rD7U2wTGagAwVqQKxopUwRszNXiK5BzDqRwUAwOk63uwr+w+fnNIp9VgOv1zIvDoBwbtAEECgIxUuR8OBuCbFokDhT2nfY4z1b7SaZUBuhJH2i6w4q1M3EJAPUAaA1kAPST48uDes/enJvkPg820dz8H8NtM32eKWR37Y+MdY50pWVaonj8AAAAASUVORK5CYII=",
        },
    ]
});

fire1DayForecastLayer_Legend = L.control.Legend({
    position: "bottomleft",
    legends: [
        {
            label: "Elevated",
            type: "polygon",
            sides: 4,
            color: "#e4bc64",
            fillColor: "#e4bc64",
            weight: 2
        },
        {
            label: "Critical",
            type: "polygon",
            sides: 4,
            color: "#f56063",
            fillColor: "#f56063",
            weight: 2        },
        {
            label: "Extreme",
            type: "polygon",
            sides: 4,
            color: "#e464cc",
            fillColor: "#e464cc",
            weight: 2
        },
    ]
});

TropicalWeatherOutlook_Lengend = L.control.Legend({
    position: "bottomleft",
    legends: [
        {
            label: "30% or Less Chance of Tropical Cyclone Formation",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABEklEQVRIib2WQZLDIAwEmyr+teRltn+mnymHQBYDApFsrU7GlmgoNGMi/xBx9FKVFAKyO5kqJyBtbRwkHfkZ4AqB0zn5kYeHKhICjw7SJFIVMAMZdUmVs9TFnJgGiUuQAajrJASk7CRZK7VAC8AtIryKVZcFb9AO4A3JcTkKD1V+WO8cXk0jN0heIQ6QF3CWwa2FN0BuQAf5A9BQV0PFfwgyhTuEVCDvIctMsCYkt6kHAI3CXZBdHeQwnaGDfAiYgkwX/iI60MqFRyFsel29Ew/g2vCuA3qrdwHAr6PScWYLW4ASTpDAr9WLqunCppIXILFcuFX48h9vgKYu/MjnkzwXiAYk1Vjq7yMXFti/Ds2uUE+JYKMPKWX16gAAAABJRU5ErkJggg==",
        },
        {
            label: "40%-60% Chance of Tropical Cyclone Formation",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABUElEQVRIib2W25GDMAxFjzNuAraYON2EKiBVmHJohtBFvB/gxBg/RHZm9Qe2fDSyrizNP5hO/VwspumYzh42W4YLTLGvjjcpRe+A5wjO8fjpGCSHK0UP4KBfRqbmzu0ACTd6U4p+tlACpfwcmNkyeD8Na3pctFECSgFCv8WuqdMALzAqF2oGVALEpmF1fo5lhxB0BvCGwHrJNUel6JeRqwNTO9g5Hu1WZW/IFiE1kBQQpnZXwlLQGcAB8ldQTldJxX8DKgk3CfEg6SUrmNqCYLOQ2TJIAHBUuAhyVgdQ7gwHyDeAGijZhb8BlEDFLpw8BKbaXcUgHS7UAFurEPWubf0DWSzGCQA+MqmOfMVlSzgH8CYBXQgaZNMxzTbdhUtKLoFU8NbvunCscMkbnwL5u/Pfu3Q1d26LxbzASAaIXYD2M6G0pWkF1tTB+XGoNEL9Avnry7fiLeQIAAAAAElFTkSuQmCC",
        },
        {
            label: "70% or Greater Chance of Tropical Cyclone Formation",
            type: "image",
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABLElEQVRIicXV0ZWDIBCF4Z+cNOFJMUsqUyoLW4xrF7IPCjvBgeDGJPdFHsQPEIYzb8r5Y9AIg4EewIAHXLc8i5nAzmAN9Ab8DN8XGIqQRAACWMBOcC1hE9gANyP6GLAjILEE5YhMgJuGRUTrY6CXWIJO8BW0HgWshkiMHFqXqZqIxfaj9+OAOvAScqWly7EWAJbNFFdALp0PDdDOuNhIUAd+guueEddiss1zt72PwnJkAx2BaYgKPYOVkCL0iqhQy2HUUqogKvRf5BF2Bz2L1LAEHYWUMDmjo6sC81I//6B1Nrals9lRVDfVuwP/04iIa2LXOWuu3vlhbDnUQSuqFxhG0nSrSAsWwKlXucTW29YGcCdxp2iJGNDH/5wjGyhipY/WMBbQvqXW1Wb+C9vxlwlVxQyMAAAAAElFTkSuQmCC",
        },
    ]
});

METAR_Legend = L.control.Legend({
    position: "bottomleft",
    legends: [
        {
            label: "0 km/h (Calm / No Reading)",
            type: "circle",
            radius: 6,
            color: "#bcb53e",
            fillColor: "#bcb53e",
            weight: 2,
        },
        {
            label: "< 12 km/h (Light Breeze)",
            type: "circle",
            radius: 6,
            color: "#bfb840",
            fillColor: "#bfb840",
            weight: 2,
        },
        {
            label: "< 39 km/h (Moderate Breeze)",
            type: "circle",
            radius: 6,
            color: "#f2cb66",
            fillColor: "#f2cb66",
            weight: 2,
        },
        {
            label: "< 62 km/h (Strong Breeze)",
            type: "circle",
            radius: 6,
            color: "#eea340",
            fillColor: "#eea340",
            weight: 2,
        },
        {
            label: "< 89 km/h (Gale Force)",
            type: "circle",
            radius: 6,
            color: "#dc5f30",
            fillColor: "#dc5f30",
            weight: 2,
        },
        {
            label: "< 118 km/h (Storm Force)",
            type: "circle",
            radius: 6,
            color: "#a80000",
            fillColor: "#a80000",
            weight: 2,
        },
        {
            label: ">= 118 km/h (Hurricane Force)",
            type: "circle",
            radius: 6,
            color: "#ff0000",
            fillColor: "#ff0000",
            weight: 2,
        },
    ]
});

SIGMET_Legend = L.control.Legend({
    position: "bottomleft",
    legends: [
        {
            label: "Convective",
            type: "polygon",
            sides: 4,
            color: "#bf7f7f",
            fillColor: "#bf7f7f",
            weight: 2
        },
        {
            label: "Thunder Storm",
            type: "polygon",
            sides: 4,
            color: "#bf7f7f",
            fillColor: "#bf7f7f",
            weight: 2
        },
        {
            label: "Tropical Cyclone",
            type: "polygon",
            sides: 4,
            color: "#bf7f7f",
            fillColor: "#bf7f7f",
            weight: 2
        },
        {
            label: "Blowing Dust/Sand",
            type: "polygon",
            sides: 4,
            color: "#cc7fcc",
            fillColor: "#cc7fcc",
            weight: 2
        },
        {
            label: "Volcanic Ash",
            type: "polygon",
            sides: 4,
            color: "#f6af8a",
            fillColor: "#f6af8a",
            weight: 2
        },
        {
            label: "Turbulance",
            type: "polygon",
            sides: 4,
            color: "#cfaf7f",
            fillColor: "#cfaf7f",
            weight: 2
        },
        {
            label: "Icing",
            type: "polygon",
            sides: 4,
            color: "#7f7fbf",
            fillColor: "#7f7fbf",
            weight: 2
        },
    ]
});
map.on('overlayadd', onOverlayAdd);
map.on('overlayremove', onOverlayAdd);

function onOverlayAdd(e) {
    removeLegend();
    _layers = layerControl.getOverlays();
    for (layer of _layers) {
        if (layer.visible) {
            showLegend(layer.name);
            if (layer.name == "Current Weather Radar") {
                StartRadar();
            }
        }
        else {
            removeLayer(layer.name);
        }
    }
}

function showLegend(layer) {
    switch (layer) {
        case "NOAA Spot Forecast":
            firePointFeatureLayer_Legend.addTo(map);
            break;
        case "SPC's Fire Weather Outlook":
            fire1DayForecastLayer_Legend.addTo(map);
            break;
        case "Two Day Graphical Tropical Weather Outlook":
            TropicalWeatherOutlook_Lengend.addTo(map);
            break;
        case "Seven Day Graphical Tropical Weather Outlook":
            TropicalWeatherOutlook_Lengend.addTo(map);
            break;
        case "NOAA METAR Current Wind Speed Direction":
            METAR_Legend.addTo(map);
            break;
        case "SIGMETs":
            SIGMET_Legend.addTo(map);
            break;
    }
}

function removeLegend() {
    firePointFeatureLayer_Legend.remove();
    fire1DayForecastLayer_Legend.remove();
    TropicalWeatherOutlook_Lengend.remove();
    METAR_Legend.remove();
    SIGMET_Legend.remove();
}

function removeLayer(layer) {
    switch (layer) {
        case "NOAA Spot Forecast":
            firePointFeatureLayer.remove();
            return;
        case "SPC's Fire Weather Outlook":
            fire1DayForecast.remove();
            return;
        case "Two Day Graphical Tropical Weather Outlook":
            TropicalWeatherOutlook.remove();
            return;
        case "Seven Day Graphical Tropical Weather Outlook":
            TropicalWeatherOutlook.remove();
            return;
        case "Current Weather Radar":
            radarLayer.remove();
            EndRadar();
            return;
        case "NOAA METAR Current Wind Speed Direction":
            NOAA_METAR_current_wind_speed_direction.remove();
    }
}

function renderList(layer) {
    if (layer == "NOAA Spot Forecast") {
        firePointFeatureLayer.eachActiveFeature(function (e) {
            scatterPlotDataArray.push({
                featureId: e.feature.id,
                lat: e.feature.properties.lat,
                lon: e.feature.properties.lon,
                name: e.feature.properties.name,
                status: e.feature.properties.stat,
                layer: layer
            });
        });
    }
    if (layer == "SPC's Fire Weather Outlook") {
        fire1DayForecast.eachActiveFeature(function (e) {
            let _FID = e.feature.properties.objectid;
            let _label;
            if (e.feature.properties.dn == 5)
                _label = "ELEVATED"
            if (e.feature.properties.dn == 8)
                _label = "CRITICAL"
            if (e.feature.properties.dn == 10)
                _label = "EXTREME"
            scatterPlotDataArray.push({
                featureId: _FID,
                name: _label,
                layer: layer,
                bounds: e.getBounds()
            });
        });
    }
    if (layer == "Two Day Graphical Tropical Weather Outlook") {
        TropicalWeatherOutlook.eachActiveFeature(function (e) {
            let _FID = e.feature.properties.objectid;
            let _label = e.feature.properties.risk2day;
            let _prob2day = e.feature.properties.prob2day;
            let _lat = e.getLatLng().lat;
            let _lon = e.getLatLng().lng;
            if (e.feature.properties.dn == 5)
                _label = "ELEVATED"
            if (e.feature.properties.dn == 8)
                _label = "CRITICAL"
            if (e.feature.properties.dn == 10)
                _label = "EXTREME"
            scatterPlotDataArray.push({
                featureId: _FID,
                name: _FID,
                prob2day: _prob2day,
                layer: layer,
                lat: _lat,
                lon: _lon
            });
        });
    }
    if (layer == "Seven Day Graphical Tropical Weather Outlook") {
        TropicalWeatherOutlook_Week.eachActiveFeature(function (e) {
            let _FID = e.feature.properties.objectid;
            let _label = e.feature.properties.risk2day;
            let _prob2day = e.feature.properties.prob2day;
            let _lat = e.getLatLng().lat;
            let _lon = e.getLatLng().lng;
            if (e.feature.properties.dn == 5)
                _label = "ELEVATED"
            if (e.feature.properties.dn == 8)
                _label = "CRITICAL"
            if (e.feature.properties.dn == 10)
                _label = "EXTREME"
            scatterPlotDataArray.push({
                featureId: _FID,
                name: _FID,
                prob2day: _prob2day,
                layer: layer,
                lat: _lat,
                lon: _lon
            });
        });
    }
    if (layer == "NOAA METAR Current Wind Speed Direction") {
        NOAA_METAR_current_wind_speed_direction.eachActiveFeature(function (e) {
            let _FID = e.feature.properties.OBJECTID;
            let _label = e.feature.properties.ICAO;
            let _lat = e.feature.properties.LATITUDE;
            let _lon = e.feature.properties.LONGITUDE;
            scatterPlotDataArray.push({
                featureId: _FID,
                name: _label,
                layer: layer,
                lat: _lat,
                lon: _lon
            });
        });
    }
    if (layer == "SIGMETs") {
        SIGMETs.eachLayer(function (layer) {
            layer.eachLayer(function (e) {
                console.log(layer)
                let _FID = e.feature.id;
                let _label = e.feature.properties.hazard;
                let _bounds = e.getBounds();
                scatterPlotDataArray.push({
                    featureId: _FID,
                    name: _label,
                    bounds: _bounds
                });
            })
        });
    }
}