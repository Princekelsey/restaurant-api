import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { ILike } from "typeorm";
import { AppDataSource } from "../data-source";
import {
  Restaurant,
  RestaurantPaginatationResponse,
} from "../entity/Restaurant";
import { CreateRestaurantInput } from "../inputs/CreateRestaurantInput";
import { PaginationInput } from "../inputs/PaginationInput";
import { SearchRestaurantInput } from "../inputs/SearchRestaurantInput";
import { UpdateRestaurantInput } from "../inputs/UpdateRestaurantInput";

export const RestaurantRepository = AppDataSource.getRepository(Restaurant);

@Resolver()
export class RestaurantResolver {
  @Query(() => RestaurantPaginatationResponse)
  async restaurants(
    @Arg("pagination") pagination: PaginationInput
  ): Promise<RestaurantPaginatationResponse> {
    const { page, pageSize } = pagination;

    const [restaurants, count] = await RestaurantRepository.findAndCount({
      skip: pageSize * (page - 1),
      take: pageSize,
      order: { createdAt: "DESC" },
    });

    return {
      restaurants,
      totalCount: count,
      page,
      pageSize,
    };
  }

  @Query(() => RestaurantPaginatationResponse)
  async searchRestaurants(
    @Arg("searchInput") searchInput: SearchRestaurantInput
  ): Promise<RestaurantPaginatationResponse> {
    const { page, pageSize, searchTerm } = searchInput;

    const [restaurants, count] = await RestaurantRepository.findAndCount({
      skip: pageSize * (page - 1),
      take: pageSize,
      where: { name: ILike(`%${searchTerm}%`) },
      order: { createdAt: "DESC" },
    });

    return {
      restaurants,
      totalCount: count,
      page,
      pageSize,
    };
  }

  @Mutation(() => Restaurant)
  async createRestaurant(
    @Arg("data") data: CreateRestaurantInput
  ): Promise<Restaurant> {
    const restaurant = RestaurantRepository.create(data);
    await restaurant.save();
    return restaurant;
  }

  @Mutation(() => Restaurant)
  async updateRestaurant(
    @Arg("id") id: string,
    @Arg("data") data: UpdateRestaurantInput
  ): Promise<Restaurant> {
    const restaurant = await RestaurantRepository.findOne({ where: { id } });

    if (!restaurant) throw new Error(`Restuarant with id: ${id} not found`);
    Object.assign(restaurant, data);
    await restaurant.save();
    return restaurant;
  }

  @Mutation(() => Boolean)
  async deleteRestaurant(@Arg("id") id: string): Promise<boolean> {
    const restaurant = await RestaurantRepository.findOne({ where: { id } });

    if (!restaurant) throw new Error(`Restuarant with id: ${id} not found`);

    await restaurant.remove();
    return true;
  }
}
