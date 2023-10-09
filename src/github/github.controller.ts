import { HttpService } from '@nestjs/axios';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('github')
export class GithubController {
  constructor(private httpService: HttpService) {}

  @Get(':owner/:repoName')
  async getRepoInfo(
    @Param('owner') owner: string,
    @Param('repoName') repoName: string,
  ) {
    try {
      const repoUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const commitsUrl = `https://api.github.com/repos/${owner}/${repoName}/commits`;

      // Obtener información del repositorio
      const repoResponse = await this.httpService.get(repoUrl).toPromise();

      // Obtener commits del repositorio
      const commitsResponse = await this.httpService
        .get(commitsUrl)
        .toPromise();

      return {
        repoInfo: repoResponse.data,
        commits: commitsResponse.data,
      };
    } catch (error) {
      // Aquí puedes manejar el error, por ejemplo, devolver un mensaje de error personalizado
      throw new NotFoundException(
        `Repositorio ${owner}/${repoName} no encontrado.`,
      );
    }
  }
}
